-- A second public PDF in the existing PDF-only publications bucket.
-- Only the site administrator may replace this exact outreach document.
drop policy if exists "Admin can read outreach PDF" on storage.objects;
drop policy if exists "Admin can upload outreach PDF" on storage.objects;
drop policy if exists "Admin can replace outreach PDF" on storage.objects;

create policy "Admin can read outreach PDF"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'publications'
  and name = 'outreach-activities.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can upload outreach PDF"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'publications'
  and name = 'outreach-activities.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can replace outreach PDF"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'publications'
  and name = 'outreach-activities.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
)
with check (
  bucket_id = 'publications'
  and name = 'outreach-activities.pdf'
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);
