create table if not exists public.homepage_content (
  key text primary key check (key in ('name', 'designation', 'research')),
  value text not null check (char_length(trim(value)) > 0),
  updated_at timestamptz not null default now()
);

insert into public.homepage_content (key, value)
values
  ('name', 'Mahmadasraf Mulla'),
  ('designation', 'Professor · Department of Electrical Engineering · SVNIT Surat'),
  ('research', 'Learning Power Electronics with hands-on-based experimentation')
on conflict (key) do nothing;

drop trigger if exists homepage_content_updated_at on public.homepage_content;
create trigger homepage_content_updated_at
before update on public.homepage_content
for each row
execute function public.set_updated_at();

alter table public.homepage_content enable row level security;

grant select on public.homepage_content to anon, authenticated;
grant update (value) on public.homepage_content to authenticated;

drop policy if exists "Public can read homepage content" on public.homepage_content;
create policy "Public can read homepage content"
on public.homepage_content
for select
to anon, authenticated
using (true);

drop policy if exists "Admin can update homepage content" on public.homepage_content;
create policy "Admin can update homepage content"
on public.homepage_content
for update
to authenticated
using ((select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in')
with check ((select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in');
