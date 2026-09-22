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
Backend: `php artisan test --compact` (22 tests, 185 assertions).
The scoped TypeScript configuration checks the active React application; legacy unused files have pre-existing errors in the repository-wide configuration.

## Hosting on https://pearlhe.com (cPanel)

Changes are in the existing frontend and Laravel repositories. No separate deployment package is required.

1. Run `npm run build` in the frontend repository. Upload the contents of `dist`, including its hidden `.htaccess`, to `public_html`.
2. Upload the Laravel project to `public_html/backend`, including its root `index.php`, root `.htaccess`, and production `vendor` dependencies. Exclude local `.env`, Git metadata, tests, local databases, logs, sessions and `storage/app/admin-credentials.local.txt`. Do not upload local bootstrap cache files. Preserve existing hosted configuration, images and data when updating a live site.
3. On the host, copy `.env.production.example` to `.env` for a FIRST installation only. Enter your cPanel MySQL credentials; the local XAMPP port/password are not the hosted credentials. APP_URL is https://pearlhe.com/backend. PUBLIC_UPLOADS=true writes files directly into backend/uploads, and PUBLIC_STORAGE_URL=/backend/uploads generates their URLs. Session cookies use HTTPS and the /backend path.
4. Copy the contents of the local backend `storage/app/public` into hosted `backend/uploads` so existing image paths, including seed images, keep working. No storage symlink is needed. New uploads go directly to this real folder.
5. To preserve your current content and admin account, export local `pearlhe_backend` through phpMyAdmin and import into the empty hosted database. Keep SQL exports outside public_html. Alternatively, use the original demo seeder and create a new admin as below.
6. In cPanel Terminal, from `public_html/backend`, run:

```sh
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
php artisan migrate --force
php artisan config:cache
php artisan view:cache
```

Generate APP_KEY only for a new installation; keep the existing production key on updates. If vendor was installed locally for production and uploaded, Composer is optional on the host. For a fresh database without an import, also run `php artisan db:seed --class=ContentSeeder --force` and `php artisan admin:create`. If cPanel has no Terminal, ask the hosting provider to execute these commands.

Hosting requirements: PHP 8.2+, Laravel PHP extensions, Apache mod_rewrite with AllowOverride enabled; writable storage, bootstrap/cache and uploads. Use upload_max_filesize >= 4M and post_max_size >= 16M.

Frontend production paths are configured in `.env.production`: VITE_API_BASE=/backend/api and VITE_STORAGE_BASE=/backend/uploads. Local `npm run dev` continues to proxy /api and /storage to Laravel at port 8000.

After upload, check /backend/api/settings, /backend/api/content/blogs, /backend/api/content/projects, /admin login, image uploads and contact submissions. Private paths such as /backend/.env, /backend/composer.json and /backend/vendor/autoload.php must return 403 or 404. The root backend .htaccess exposes only the API, health endpoint, front controller and approved image filenames; do not replace it with an unrestricted fallback.

`backend-scaffold` remains the existing reviewable mirror of the custom Laravel source. The running backend repository is C:\xampp\htdocs\PearlHe Backend.
