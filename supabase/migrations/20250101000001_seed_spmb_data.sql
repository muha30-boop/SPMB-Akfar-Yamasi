-- ========================================================
-- SPMB Akfar Yamasi - Seed Data
-- Populates initial panel settings, staff, menu items,
-- and sample data for testing the integration.
-- ========================================================

-------------------------------------------------
-- Panel Settings (key-value configuration)
-------------------------------------------------

insert into panel_settings (key, value, description) values
  ('academic_year', '2025/2026', 'Tahun ajaran aktif'),
  ('target_capacity', '500', 'Kapasitas target pendaftar'),
  ('program_prefix', '01', 'Prefix prodi D-3 Farmasi'),
  ('nim_base', '2500000', 'Base number untuk generate NIM'),
  ('last_nim', '2501064', 'NIM terakhir yang diterbitkan'),
  ('class_reg_a_capacity', '50', 'Kapasitas kelas reguler A'),
  ('class_reg_b_capacity', '50', 'Kapasitas kelas reguler B'),
  ('class_rpl_capacity', '45', 'Kapasitas kelas RPL'),
  ('class_reg_a_pa', 'apt. Nurfadilah, M.Farm.', 'PA Kelas Reguler A'),
  ('class_reg_b_pa', 'apt. Syamsuddin, M.Si.', 'PA Kelas Reguler B'),
  ('class_rpl_pa', 'apt. Wahyuni S., M.Sc.', 'PA Kelas RPL Karyawan TTK');

-------------------------------------------------
-- Panel Menu Items (sidebar navigation)
-------------------------------------------------

insert into panel_menu_items (label, icon, data_path, display_order) values
  ('Dashboard Ringkasan', 'space_dashboard', 'panel-pmb', 1),
  ('Verifikasi Berkas', 'fact_check', 'verifikasi-berkas', 2),
  ('Asesmen Portofolio RPL', 'assignment_ind', 'asesmen-portofolio-rpl', 3),
  ('Manajemen Ujian Masuk', 'quiz', 'manajemen-ujian-masuk', 4),
  ('Admisi & Penetapan NIM', 'badge', 'admisi-dan-penetapan', 5),
  ('Export PDDIKTI / SIAKAD', 'sync_alt', 'export-pddikti-siakad', 6);

-------------------------------------------------
-- Panel Staff (team members in header)
-------------------------------------------------

insert into panel_staff (full_name, role, division, avatar_initials, display_order) values
  ('Panitia SPMB 2025', 'Staf Verifikator Akademik', 'ADMISI', 'PS', 1),
  ('Dr. apt. Nurfadilah, M.Farm.', 'Ketua Panitia', 'ADMISI', 'NF', 2),
  ('apt. Syamsuddin, M.Si.', 'Sekretaris', 'ADMISI', 'SA', 3);

-------------------------------------------------
-- Sample School Masters
-------------------------------------------------

insert into school_masters (name, city, province, type) values
  ('SMA Negeri 1 Makassar', 'Makassar', 'Sulawesi Selatan', 'SMA'),
  ('SMK Farmasi Yamasi Makassar', 'Makassar', 'Sulawesi Selatan', 'SMK'),
  ('SMA Katolik Rajawali', 'Makassar', 'Sulawesi Selatan', 'SMA'),
  ('Madrasah Aliyah Negeri 1 Makassar', 'Makassar', 'Sulawesi Selatan', 'MA'),
  ('SMA Negeri 1 Maros', 'Maros', 'Sulawesi Selatan', 'SMA');

-------------------------------------------------
-- Sample Registrations (for testing UI)
-------------------------------------------------

insert into registrations (
  registration_number, route, nik, family_card_number, full_name,
  mother_name, whatsapp, birth_place, birth_date, gender, religion, email,
  school_origin, gpa, school_name, school_city,
  billing_amount, payment_status, document_status,
  exam_schedule, exam_room, exam_time, nim, class_assignment,
  academic_advisor, admission_status, document_remarks,
  verified_at
) values
  (
    'PMB25-0102', 'reguler', '7371124508050001', '7371124508050001',
    'Nurul Aisyah Maharani', 'Siti Rahmawati', '0812-4211-9870',
    'Makassar', '2006-08-12', 'P', 'Islam', 'nurul.aisyah@gmail.com',
    'SMK_FAR', 88.50, 'SMK Farmasi Yamasi Makassar', 'Makassar',
    250000, 'paid', 'verified',
    'Tes CBT Gel. 1', 'LabKom B', '08:30 WITA',
    '2501001', 'Reguler A', 'apt. Nurfadilah, M.Farm.', 'registered', NULL,
    '2025-05-14 09:30:00'::timestamp
  ),
  (
    'RPL25-0044', 'rpl', '7371081903960004', '7371081903960004',
    'Ahmad Rizal Fahrezi', 'Kartini Wijaya', '0852-9901-2234',
    'Gowa', '1996-03-19', 'L', 'Islam', 'rizal.ttk@rsudgowa.id',
    NULL, NULL, NULL, NULL,
    'RSUD Syekh Yusuf Gowa (TTK)', NULL, NULL, NULL,
    workplace_institution := 'RSUD Syekh Yusuf Gowa (TTK)', work_experience_years := 3,
    job_title := 'Asisten Tenaga Kefarmasian',
    previous_institution := 'D-3 Kefarmasian UIN Makassar',
    450000, 'paid', 'verified',
    'Tes Wawancara: 20 Mei 2025', 'Ruang Sidang 2', '10:00 WITA',
    NULL, 'RPL Sore', 'apt. Wahyuni S., M.Sc.', 'accepted',
    'Konversi Usulan: 48 SKS',
    '2025-05-15 14:10:00'::timestamp
  ),
  (
    'PMB25-0158', 'reguler', '7371101101060002', '7371101101060002',
    'Fathir Tri Wicaksono', 'Dewi Sartika', '0821-8876-1102',
    'Maros', '2007-01-11', 'L', 'Islam', 'fathir.wicaksono@yahoo.com',
    'SMA', 84.20, 'SMA Negeri 1 Maros', 'Maros',
    250000, 'pending', 'pending',
    'Tes CBT Gel. 1', 'LabKom B', '08:30 WITA',
    NULL, NULL, NULL, 'pending_admission', NULL,
    '2025-05-16 08:15:00'::timestamp
  ),
  (
    'PMB25-0089', 'reguler', '7371146205060003', '7371146205060003',
    'Gracia Maria Tumewu', 'Maria Tumewu', '0813-5590-4411',
    'Makassar', '2006-05-22', 'P', 'Kristen', 'gracia.tumewu@gmail.com',
    'SMA', 78.75, 'SMA Katolik Rajawali', 'Makassar',
    250000, 'paid', 'revision',
    NULL, NULL, NULL,
    NULL, NULL, NULL, 'pending_admission', 'Scan SKL Buram / Terpotong',
    '2025-05-12 11:22:00'::timestamp
  );
