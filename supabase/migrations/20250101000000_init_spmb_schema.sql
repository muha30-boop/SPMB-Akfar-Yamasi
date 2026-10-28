-- ========================================================
-- SPMB Akfar Yamasi - Database Schema
-- Tahun Akademik 2025/2026
-- ========================================================

-------------------------------------------------
-- 1. registrations
--    Core applicant registration table.
--    Stores all data submitted via the "Daftar Sekarang"
--    form on the landing page. Both Reguler and RPL
--    routes share this table; route-specific columns
--    are nullable.
-------------------------------------------------

create table registrations (
  id                       uuid              primary key default gen_random_uuid(),

  -- Auto-generated registration number (PMB25-XXXX / RPL25-XXXX)
  registration_number      text              unique not null,

  -- Jalur pendaftaran: 'reguler' | 'rpl'
  route                    text              not null check (route in ('reguler', 'rpl')),

  -- Timestamps
  created_at               timestamp with time zone default now() not null,
  updated_at               timestamp with time zone default now() not null,

  -- =============================
  -- Identitas Diri & Kependudukan
  -- =============================
  nik                      char(16),
  family_card_number       char(16),
  full_name                text,
  mother_name              text,
  whatsapp                 text,
  birth_place              text,
  birth_date               date,
  gender                   text check (gender in ('L', 'P')),
  religion                 text,
  email                    text,
  marital_status           text,

  -- =============================
  -- Reguler-specific fields
  -- =============================
  school_origin            text check (school_origin in ('SMA', 'SMK_FAR', 'MA', 'SMA_IPS')),
  gpa                      numeric(5,2) check (gpa >= 0 and gpa <= 100),
  school_name              text,
  school_city              text,

  -- =============================
  -- RPL-specific fields
  -- =============================
  workplace_institution    text,
  work_experience_years    int check (work_experience_years >= 0 and work_experience_years <= 25),
  job_title                text,
  previous_institution     text,

  -- =============================
  -- Dokumen / Berkas
  -- =============================
  -- File paths in Supabase Storage bucket
  document_ijazah_path     text,
  document_photo_path      text,
  document_portfolio_path  text,
  document_transcript_path text,
  document_strk_path       text,

  -- =============================
  -- Financial
  -- =============================
  billing_amount           numeric(12,2),
  payment_status           text not null default 'pending'
                            check (payment_status in ('pending', 'paid', 'failed')),
  payment_method           text,
  payment_va_number        text,
  payment_paid_at          timestamp with time zone,

  -- =============================
  -- Processing / Seleksi
  -- =============================
  document_status          text not null default 'pending'
                            check (document_status in ('pending', 'verified', 'rejected', 'revision')),
  document_remarks         text,
  rpl_sks_awarded          numeric(5,2),
  rpl_assessment_status    text check (rpl_assessment_status in ('pending', 'in_progress', 'completed', 'passed', 'failed')),
  exam_schedule            text,
  exam_room                text,
  exam_time                text,
  exam_status              text check (exam_status in ('not_scheduled', 'scheduled', 'completed', 'absent')) default 'not_scheduled',
  exam_score               numeric(5,2),

  -- Admissions / NIM
  nim                      text,
  class_assignment         text,
  academic_advisor         text,
  admission_status         text not null default 'pending_admission'
                            check (admission_status in ('pending_admission', 'accepted', 'rejected', 'registered')),

  -- Verifikator
  verified_by              text,
  verified_at              timestamp with time zone,
  notes                    text
);

-- Indexes for faster lookups
create index idx_registrations_route           on registrations(route);
create index idx_registrations_payment_status on registrations(payment_status);
create index idx_registrations_document_status on registrations(document_status);
create index idx_registrations_admission_status on registrations(admission_status);
create index idx_registrations_nik             on registrations(nik);
create index idx_registrations_registration_number on registrations(registration_number);
create index idx_registrations_created_at      on registrations(created_at desc);

-------------------------------------------------
-- 2. panel_staff
--    Team members displayed in the Panel
--    Panitia & Admisi SPMB header.
-------------------------------------------------

create table panel_staff (
  id             uuid              primary key default gen_random_uuid(),
  full_name      text              not null,
  role           text              not null,
  division       text,
  avatar_initials text,
  is_active      boolean           default true not null,
  display_order  int               default 0,
  created_at     timestamp with time zone default now() not null
);

create index idx_panel_staff_display_order on panel_staff(display_order);
create index idx_panel_staff_is_active     on panel_staff(is_active);

-------------------------------------------------
-- 3. panel_menu_items
--    Navigation menu items for the admin panel sidebar.
-------------------------------------------------

create table panel_menu_items (
  id            uuid              primary key default gen_random_uuid(),
  label         text              not null,
  icon          text,
  data_path     text,
  href          text,
  display_order int               not null default 0,
  is_active     boolean           default true not null,
  created_at    timestamp with time zone default now() not null
);

create index idx_panel_menu_display_order on panel_menu_items(display_order);

-------------------------------------------------
-- 4. panel_settings
--    Key-value store for panel-level configuration
--    (academic year, NIM prefix, target capacity, etc.)
-------------------------------------------------

create table panel_settings (
  key         text   primary key,
  value       text   not null,
  description text
);

-------------------------------------------------
-- 5. panel_activities
--    Activity feed / notification stream for the
--    admin panel dashboard.
-------------------------------------------------

create table panel_activities (
  id          uuid              primary key default gen_random_uuid(),
  title       text              not null,
  description text,
  type        text not null check (type in ('info', 'warning', 'error', 'success')) default 'info',
  is_read     boolean           default false not null,
  created_at  timestamp with time zone default now() not null,
  created_by  text
);

create index idx_panel_activities_created_at on panel_activities(created_at desc);
create index idx_panel_activities_is_read     on panel_activities(is_read);

-------------------------------------------------
-- 6. school_masters
--    Predefined list of schools/institutions for
--    the "Asal Sekolah" autocomplete on the form.
-------------------------------------------------

create table school_masters (
  id          uuid              primary key default gen_random_uuid(),
  name        text              not null,
  city        text,
  province    text,
  type        text check (type in ('SMA', 'SMK', 'MA')),
  is_active   boolean           default true not null,
  created_at  timestamp with time zone default now() not null
);

create index idx_school_masters_name on school_masters(name);
create index idx_school_masters_type on school_masters(type);

-------------------------------------------------
-- Helper: generate_registration_number()
--    Returns the next sequential registration number
--    based on route prefix and current year.
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
-- Trigger: auto-update updated_at on registrations
-------------------------------------------------

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_registrations_updated_at
before update on registrations
for each row
execute function update_updated_at_column();

-------------------------------------------------
-- Row Level Security (RLS)
-- Enables read access for anon role and
-- write access for registration form submissions.
-------------------------------------------------

-- registrations: anyone can insert (Daftar Sekarang), anyone can read
alter table registrations enable row level security;
create policy "Public can insert registrations" on registrations
  for insert with check (true);
create policy "Public can read registrations" on registrations
  for select using (true);
create policy "Public can update registrations" on registrations
  for update using (true);

-- panel_tables: read-only for anon
alter table panel_staff enable row level security;
create policy "Public can read panel_staff" on panel_staff
  for select using (true);

alter table panel_menu_items enable row level security;
create policy "Public can read panel_menu_items" on panel_menu_items
  for select using (true);

alter table panel_settings enable row level security;
create policy "Public can read panel_settings" on panel_settings
  for select using (true);

alter table panel_activities enable row level security;
create policy "Public can read panel_activities" on panel_activities
  for select using (true);

alter table school_masters enable row level security;
create policy "Public can read school_masters" on school_masters
  for select using (true);

-------------------------------------------------
-- Storage bucket access
-- Allows public read on uploaded documents
-------------------------------------------------

create policy "Public can read spmb-documents" on storage.objects
  for select using (bucket_id = 'spmb-documents');
