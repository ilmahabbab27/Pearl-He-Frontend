# Pearl Heritance CMS

## Locations

- Laravel backend: `C:\xampp\htdocs\PearlHe Backend`
- Frontend admin: `http://localhost:5173/admin`
- MySQL database: `pearlhe_backend`, port `3307` (view through phpMyAdmin)
- Database credentials are stored only in the backend `.env`.

## Database status

MySQL is connected on port 3307. The pearlhe_backend database is migrated, three articles and four projects are imported, and the initial administrator is created. Credentials are in the backend storage/app/admin-credentials.local.txt file.

## Setup commands (already completed)

Run in the backend folder, stopping if any command fails:

```powershell
php artisan config:clear
php create-database.php
php artisan migrate
php artisan db:seed --class=ContentSeeder
php artisan storage:link
php setup-admin.php
php artisan serve --host=127.0.0.1 --port=8000
```

`setup-admin.php` creates the first administrator only when no users exist and saves a random password in `storage/app/admin-credentials.local.txt`. This file is outside Laravel's public directory. To create another administrator, run `php artisan admin:create` and answer the prompts. There is no public registration; all users created through this command are CMS administrators.

In the frontend folder run `npm run dev` and open `/admin`. Use the credentials file after setup succeeds.

## Features

- Contact form submissions are saved in MySQL and appear under Admin > Contact messages, with sender details, read/unread controls, deletion, pagination and automatic refresh. Submissions are validated and rate limited; inbox access requires login.
- Session-based login, CSRF protection and login rate limiting.
- Add, edit, delete, publish and unpublish blogs and projects.
- Blog cover image uploads and up to five images per project (one cover plus four optional gallery images). JPG, PNG or WebP, up to 2 MB each. Project gallery images can be individually replaced or removed; visitors select thumbnails on the project detail page.
- Optional partner company name and logo for each project, with logo replacement/removal and display on the project detail page. Logos accept JPG, PNG or WebP up to 2 MB and do not count toward the five project images.
- Optional YouTube links on blog articles, with live editor previews and embedded playback on article pages. Watch, share, Shorts, live and embed URLs are supported. Clear the link and save to remove the video. Playback depends on the video being available and permitting embedding; a Watch on YouTube link is also provided.
- Titles, unique URL slugs, categories/sectors, summaries, descriptions and article paragraphs.
- Existing three articles and four projects imported by the idempotent ContentSeeder.
- Public lists and detail pages read published database content, with loading, error and empty states.
- Tests run in an isolated SQLite in-memory database, independently of the MySQL application database.

## Validation

Frontend: `npm run build` and `npx tsc --project tsconfig.cms.json`.
Backend: `php artisan test --compact` (21 tests, 177 assertions).
The scoped TypeScript configuration checks the active React application; legacy unused files have pre-existing errors in the repository-wide configuration.

## Hosting

The development server proxies `/api` and `/storage` to Laravel on port 8000. For deployment, route those paths to Laravel under the same public origin as the frontend, and serve the React build with an SPA fallback for `/admin`, `/blogs/*` and `/projects/*`. Laravel's Apache document root must point to its `public` directory. Set production APP_URL, APP_ENV=production, APP_DEBUG=false and SESSION_SECURE_COOKIE=true for HTTPS. Do not upload backend `.env` or storage credentials to the frontend host. Database content requires the backend to be deployed and available; it is not bundled into a static frontend build.

`backend-scaffold` contains the custom backend source and original content seed as a reviewable copy. The running Laravel installation is in the backend folder above.
