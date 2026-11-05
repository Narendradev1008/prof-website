# Professor Website

This React/Vite website presents the academic profile of Dr. Mahmadasraf A. Mulla. It includes the academic journey, laboratories, research and activity PDFs, contact details, and a small Supabase-backed admin area.

## Content flow

```text
Public visitor
  -> React pages
  -> public statistics and public PDF URLs from Supabase

Administrator
  -> /admin
  -> Supabase email/password sign-in
  -> update homepage text, six statistics, or replace a fixed public PDF
```

### Decisions behind the implementation

- **Statistics are data, not hard-coded JSX.** `site_statistics` contains the six editable cards. The public pages use built-in fallback values if Supabase is temporarily unavailable.
- **One shared PDF configuration.** `src/lib/documents.js` defines every PDF title, path, download name, and description once. The public pages and the admin upload cards both use this data.
- **Fixed storage paths.** Each upload replaces a known file path rather than creating arbitrary public files. A new upload uses Supabase `upsert`, so it replaces the current visible document; it does not create a user-facing history or restore option.
- **Public reading, restricted replacement.** Visitors can view and download documents. Supabase Row Level Security (RLS) restricts updates to the configured administrator email.
- **No server-role secret in the browser.** The client uses only the Supabase publishable key. Never put a service-role key in a Vite `VITE_*` variable.
- **Small initial download.** Secondary pages are lazy-loaded, so the home page does not need to download every lab, admin, and document page before it can render.

## Visual system

The site uses one research-lab design language across the public pages: dark navy technical heroes, teal/cyan/amber highlights, real laboratory imagery, and bright reading surfaces for long academic content. Shared `PageHero`, `SectionHeading`, and `MetricCard` components keep the Home page, academic journey, laboratory pages, and PDF pages consistent without duplicating layout code. The admin area stays deliberately light and form-focused so it remains easy to use.

## Editable content

The administrator can edit these three homepage hero fields at `/admin`:

1. Professor name
2. Designation, department and institute
3. Research focus

The same page also allows editing these six statistics:

1. Years of Teaching Experience
2. Publications
3. Journal Articles
4. Conference Papers
5. Granted Indian Patent
6. Core Teaching Areas

The first four are displayed in the Home page highlight grid. All six appear on the Academic Journey page.

The admin can also replace these public PDFs (up to 5 MB each):

| Public page | Fixed Storage path |
| --- | --- |
| Project-based Learning | `project-based-learning.pdf` |
| Publications | `updated-publications-mam.pdf` |
| Project Grants/Consultancy Work | `projects.pdf` |
| Thesis Supervision | `thesis-supervision.pdf` |
| Outreach Activities | `outreach-activities.pdf` |
| Conferences & Workshops Organized | `conferences-workshops-organized.pdf` |
| Events Attended | `events-attended.pdf` |
| Expert Talks | `expert-talks.pdf` |

Before displaying a document, the public page checks whether the file exists. If it has not yet been uploaded, visitors see a clear “being prepared” state instead of a failed embedded PDF.

## Project structure

```text
fronted/
├── .env.example
├── supabase/
│   └── migrations/
│       ├── 001_site_statistics.sql
│       ├── 002_publications_storage.sql
│       ├── 003_outreach_storage.sql
│       ├── 004_projects_storage.sql
│       ├── 005_academic_activities_storage.sql
│       ├── 006_thesis_storage.sql
│       └── 007_project_based_learning_storage.sql
└── src/
    ├── components/              # Home, journey, laboratories, PDF viewer, navigation
    ├── hooks/useStatistics.js   # Shared public statistic loading and fallback
    ├── lib/
    │   ├── documents.js         # Shared document paths, URLs, and upload validation
    │   ├── statistics.js        # Statistic read/update functions
    │   ├── statisticsDefaults.js # Built-in statistic fallback values
    │   └── supabase.js          # Browser client, no secret credentials
    └── pages/                   # Admin, document route wrappers, and 404 page
```

## Supabase setup

Do these steps once for the Supabase project.

1. Create a Supabase project.
2. In **SQL Editor**, run the migrations in numeric order: `001_site_statistics.sql` through `008_homepage_content.sql`.
3. In **Authentication → Users**, create the administrator account for `mam@eed.svnit.ac.in`. Use a long, unique password and enable MFA if it is available.
4. In **Connect / API**, copy the Project URL and publishable key.
5. Copy `.env.example` to an uncommitted `.env.local` file:

   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
   ```

6. Install dependencies and start the local site:

   ```bash
   npm install
   npm run dev
   ```

7. Open `/admin`, sign in, change a homepage field and a statistic, save each, and refresh the relevant public page.
8. Upload one PDF in `/admin`, then verify the corresponding public page can display and download it.

If the migrations have not been applied, statistics fall back to their built-in values and document uploads/viewing will not work against Supabase.

## Day-to-day administration

1. Go to `/admin` and sign in.
2. Edit a statistic and choose **Save changes**, or choose a PDF and click **Upload PDF**.
3. Check the related public page after the upload.
4. Sign out when finished.

The browser accepts `.pdf` files up to 5 MB and also checks the supplied MIME type when it is available. This is a useful browser-side guard, but Storage RLS is the real permission boundary. Strong byte-level file validation would require a server or Edge Function.

## Security and deployment notes

- Keep `.env.local` out of Git and never share its values in public messages.
- The `publications` Storage bucket is intentionally public so visitors can read PDFs. Do not place private documents in it.
- The migrations allow only the configured administrator to update the fixed document paths. There is deliberately no browser delete policy.
- Before launch, review existing Supabase Storage policies. Remove any older broad upload policy that could override the intended restrictions.
- The current single-admin policy uses the email claim. For multiple administrators later, use an `admin_users` table or server-managed role instead.
- Your production host must rewrite unknown application routes to `index.html`; this is required for direct visits to routes such as `/research/publications`.

## Local checks

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` produces the deployable `dist/` directory. The project has route-level loading states and a 404 page for unknown client-side URLs.
