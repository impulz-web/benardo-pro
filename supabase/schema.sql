-- Run this in Supabase SQL Editor
create extension if not exists pgcrypto;

create table if not exists public.services_offered (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.services_offered enable row level security;

create table if not exists public.benardo (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  company text,
  timeline text,
  message text not null,
  service_id uuid not null references public.services_offered(id) on update cascade on delete restrict,
  created_at timestamptz not null default now()
);

alter table public.benardo enable row level security;

-- Allow public form to read active services for dropdown
drop policy if exists "Public can read services_offered" on public.services_offered;
create policy "Public can read services_offered"
on public.services_offered
for select
to anon
using (is_active = true);

-- Allow public form submissions into benardo table
drop policy if exists "Public can insert benardo" on public.benardo;
create policy "Public can insert benardo"
on public.benardo
for insert
to anon
with check (true);

-- Optional starter data
insert into public.services_offered (name, description)
values
  ('Web Development', 'Custom websites and web applications'),
  ('Brand Strategy', 'Positioning, messaging, and strategy'),
  ('UI/UX Design', 'Product and marketing design systems'),
  ('Marketing Automation', 'Lead capture and automated campaign setup')
on conflict (name) do nothing;