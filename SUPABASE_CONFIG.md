# Panduan Konfigurasi Supabase untuk Form Kontak KODWA TECH

Jika Anda mendapatkan pesan error saat mengirim form kontak, silakan ikuti langkah-langkah berikut untuk mengonfigurasi database Supabase Anda.

## 1. Buat Tabel `leads`

Buka **SQL Editor** di Dashboard Supabase Anda dan jalankan perintah SQL berikut:

```sql
-- Buat tabel leads
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  whatsapp text not null,
  company text,
  description text not null
);

-- Aktifkan Row Level Security (RLS)
alter table public.leads enable row level security;
```

## 2. Konfigurasi RLS Policy (PENTING)

Agar pengunjung website dapat mengirim data (INSERT) ke tabel tanpa perlu login, Anda harus membuat kebijakan (policy) berikut:

1. Pergi ke menu **Database** -> **Policies**.
2. Cari tabel `leads`.
3. Klik **New Policy** -> **Create a policy from scratch**.
4. Isi data berikut:
   - **Policy Name**: `Enable insert for anonymous users`
   - **Allowed operations**: `INSERT`
   - **Target roles**: `anon`
   - **WITH CHECK expression**: `true`
5. Klik **Save Policy**.

## 3. Verifikasi Variabel Lingkungan di Vercel

Pastikan Anda sudah menambahkan variabel berikut di Dashboard Vercel (**Settings** -> **Environment Variables**):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Setelah menambahkan variabel tersebut, Anda perlu melakukan **Redeploy** di Vercel agar perubahan terserap.

---

Dengan konfigurasi di atas, data dari form kontak di website akan masuk dengan mulus ke database Supabase Anda.
