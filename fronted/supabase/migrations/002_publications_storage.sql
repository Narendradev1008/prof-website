-- A single public PDF that visitors can view or download.
-- Only the authenticated site administrator may replace this exact file.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'publications',
  'publications',
  true,
  5242880,
  array['application/pdf']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admin can read publication PDF" on storage.objects;
drop policy if exists "Admin can upload publication PDF" on storage.objects;
drop policy if exists "Admin can replace publication PDF" on storage.objects;

create policy "Admin can read publication PDF"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'publications'
  and name = 'updated-publications-mam.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can upload publication PDF"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'publications'
  and name = 'updated-publications-mam.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can replace publication PDF"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'publications'
  and name = 'updated-publications-mam.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
)
with check (
  bucket_id = 'publications'
  and name = 'updated-publications-mam.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);
