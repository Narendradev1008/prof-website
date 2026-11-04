create table if not exists public.site_statistics (
  key text primary key,
  value text not null check (char_length(trim(value)) > 0),
  label text not null check (char_length(trim(label)) > 0),
  display_order smallint not null unique check (display_order > 0),
  updated_at timestamptz not null default now()
);

insert into public.site_statistics (key, value, label, display_order)
values
  ('teaching_experience', '28+', 'Years of Teaching Experience', 1),
  ('publications', '100', 'Publications', 2),
  ('journal_articles', '52', 'Journal Articles', 3),
  ('conference_papers', '38', 'Conference Papers', 4),
  ('granted_indian_patent', '1', 'Granted Indian Patent', 5),
  ('core_teaching_areas', '5', 'Core Teaching Areas', 6)
on conflict (key) do nothing;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists site_statistics_updated_at on public.site_statistics;
create trigger site_statistics_updated_at
before update on public.site_statistics
for each row
execute function public.set_updated_at();

alter table public.site_statistics enable row level security;

grant select on public.site_statistics to anon, authenticated;
grant update (value, label, display_order) on public.site_statistics to authenticated;

drop policy if exists "Public can read site statistics" on public.site_statistics;
create policy "Public can read site statistics"
on public.site_statistics
for select
to anon, authenticated
using (true);

drop policy if exists "Admin can update site statistics" on public.site_statistics;
create policy "Admin can update site statistics"
on public.site_statistics
for update
to authenticated
using ((select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in')
with check ((select lower(auth.jwt() ->> 'email')) = 'mam@eed.svnit.ac.in');
