-- Three public Academic Activities PDFs in the existing PDF-only bucket.
-- Only the site administrator may replace these exact documents.
drop policy if exists "Admin can read academic activity PDFs" on storage.objects;
drop policy if exists "Admin can upload academic activity PDFs" on storage.objects;
drop policy if exists "Admin can replace academic activity PDFs" on storage.objects;

create policy "Admin can read academic activity PDFs"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'publications'
  and name in (
    'conferences-workshops-organized.pdf',
    'events-attended.pdf',
    'expert-talks.pdf'
  )
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can upload academic activity PDFs"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'publications'
  and name in (
    'conferences-workshops-organized.pdf',
    'events-attended.pdf',
    'expert-talks.pdf'
  )
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);

create policy "Admin can replace academic activity PDFs"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'publications'
  and name in (
    'conferences-workshops-organized.pdf',
    'events-attended.pdf',
    'expert-talks.pdf'
  )
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
)
with check (
  bucket_id = 'publications'
  and name in (
    'conferences-workshops-organized.pdf',
    'events-attended.pdf',
    'expert-talks.pdf'
  )
  and (select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in'
);
