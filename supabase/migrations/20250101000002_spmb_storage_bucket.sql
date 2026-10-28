-- ========================================================
-- SPMB Akfar Yamasi - Storage Bucket Setup
-- Creates a public storage bucket for SPMB document uploads
-- (Ijazah/SKL, Pasfoto, Portofolio RPL, Transkrip)
-- ========================================================

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'spmb-documents',
  'spmb-documents',
  true,
  2097152,
  ARRAY['image/jpeg', 'image/jpg', 'application/pdf']
)
on conflict (id) do nothing;

-- Enable RLS on storage bucket for security (optional hardening)
-- The bucket is public for simplicity in the SPMB registration flow
