-- ========================================================
-- SPMB Akfar Yamasi - Panel Enhancements Migration
-- Adds recruitment_waves table, write policies, and
-- trigger functions for the admin panel.
-- ========================================================

-------------------------------------------------
-- 1. recruitment_waves
--    Gelombang pendaftaran (recruitment waves)
--    Each wave represents a registration period with
--    its own timeline and capacity.
-------------------------------------------------

create table if not exists recruitment_waves (
  id             uuid              primary key default gen_random_uuid(),
  name           text              not null,
  code           text              unique not null,
  academic_year  text              not null,
  status         text              not null default 'scheduled'
                                           check (status in ('active', 'scheduled', 'archived')),
  start_date     timestamp with time zone,
  end_date       timestamp with time zone,
  capacity       int               default 500,
  created_at     timestamp with time zone default now() not null
);

create index if not exists idx_recruitment_waves_status on recruitment_waves(status);
create index if not exists idx_recruitment_waves_code   on recruitment_waves(code);

-------------------------------------------------
-- 2. RLS Policies for write access on panel tables
--    Allow update/delete on panel tables so the
--    admin panel can manage settings, staff, menu,
--    and activities directly from the UI.
-------------------------------------------------

-- panel_settings: allow update
alter table panel_settings enable row level security;
create policy "Public can update panel_settings" on panel_settings
  for update using (true);
create policy "Public can insert panel_settings" on panel_settings
  for insert with check (true);
create policy "Public can delete panel_settings" on panel_settings
  for delete using (true);

-- panel_staff: allow insert/update/delete
alter table panel_staff enable row level security;
create policy "Public can insert panel_staff" on panel_staff
  for insert with check (true);
create policy "Public can update panel_staff" on panel_staff
  for update using (true);
create policy "Public can delete panel_staff" on panel_staff
  for delete using (true);

-- panel_menu_items: allow insert/update/delete
alter table panel_menu_items enable row level security;
create policy "Public can insert panel_menu_items" on panel_menu_items
  for insert with check (true);
create policy "Public can update panel_menu_items" on panel_menu_items
  for update using (true);
create policy "Public can delete panel_menu_items" on panel_menu_items
  for delete using (true);

-- panel_activities: allow insert/update
alter table panel_activities enable row level security;
create policy "Public can insert panel_activities" on panel_activities
  for insert with check (true);
create policy "Public can update panel_activities" on panel_activities
  for update using (true);

-- recruitment_waves: allow full CRUD for anon
alter table recruitment_waves enable row level security;
create policy "Public can select recruitment_waves" on recruitment_waves
  for select using (true);
create policy "Public can insert recruitment_waves" on recruitment_waves
  for insert with check (true);
create policy "Public can update recruitment_waves" on recruitment_waves
  for update using (true);
create policy "Public can delete recruitment_waves" on recruitment_waves
  for delete using (true);

-------------------------------------------------
-- 3. Enhanced generate_registration_number()
--    Handles both 'reguler' and 'rpl' routes
--    with proper year-based sequential numbering.
-------------------------------------------------

create or replace function generate_registration_number(p_route text)
returns text
language plpgsql
as $$
declare
  v_prefix text;
  v_year   text;
  v_count  int;
  v_number text;
begin
  v_year := extract(year from now())::text;
  if p_route = 'reguler' then
    v_prefix := 'PMB' || v_year || '-';
  else
    v_prefix := 'RPL' || v_year || '-';
  end if;

  select count(*) + 1
  into v_count
  from registrations
  where registration_number like v_prefix || '%';

  v_number := lpad(v_count::text, 4, '0');
  return v_prefix || v_number;
end;
$$;

-------------------------------------------------
-- 4. create_nim_from_registration()
--    Generates a NIM (Nomor Induk Mahasiswa) for an
--    accepted registration based on panel settings.
-------------------------------------------------

create or replace function create_nim_from_registration(p_reg_id uuid)
returns text
language plpgsql
as $$
declare
  v_last_nim      text;
  v_nim_base      text;
  v_program_prefix text;
  v_route         text;
  v_year          text;
  v_sequence      int;
  v_nim           text;
begin
  -- Get settings
  select value into v_last_nim from panel_settings where key = 'last_nim';
  select value into v_nim_base from panel_settings where key = 'nim_base';
  select value into v_program_prefix from panel_settings where key = 'program_prefix';

  -- Get registration route
  select route into v_route from registrations where id = p_reg_id;

  v_year := right(extract(year from now())::text, 2);

  -- Extract the numeric sequence from last_nim and increment
  begin
    v_sequence := (substring(v_last_nim from '\d+$')::int) + 1;
  exception when others then
    v_sequence := (v_nim_base::int) + 1;
  end;

  v_nim := v_year || v_program_prefix || lpad(v_sequence::text, 3, '0');

  -- Update panel_settings with new last_nim
  update panel_settings set value = v_nim where key = 'last_nim';

  -- Update the registration with the generated NIM
  update registrations
  set nim = v_nim,
      admission_status = 'registered',
      updated_at = now()
  where id = p_reg_id;

  return v_nim;
end;
$$;

-------------------------------------------------
-- 5. Seed data for recruitment_waves
-------------------------------------------------

insert into recruitment_waves (name, code, academic_year, status, start_date, end_date, capacity) values
  ('Gelombang 1 (2025/2026)', 'GW25-01', '2025/2026', 'active',
   '2025-03-01 00:00:00+00', '2025-06-30 23:59:59+00', 300),
  ('Gelombang 2 (2025/2026)', 'GW25-02', '2025/2026', 'scheduled',
   '2025-07-01 00:00:00+00', '2025-09-30 23:59:59+00', 200),
  ('Jalur RPL Khusus Nakes', 'GW25-RPL', '2025/2026', 'scheduled',
   '2025-05-01 00:00:00+00', '2025-08-31 23:59:59+00', 50)
on conflict (code) do update
  set name = excluded.name,
      academic_year = excluded.academic_year,
      status = excluded.status,
      start_date = excluded.start_date,
      end_date = excluded.end_date,
      capacity = excluded.capacity;

-- Update existing panel_settings with new keys if missing
insert into panel_settings (key, value, description) values
  ('rpl_conversion_threshold', '75', 'Nilai ambang batas kelulusan RPL'),
  ('registration_fee_reguler', '250000', 'Biaya pendaftaran reguler'),
  ('registration_fee_rpl', '450000', 'Biaya pendaftaran RPL')
on conflict (key) do nothing;
