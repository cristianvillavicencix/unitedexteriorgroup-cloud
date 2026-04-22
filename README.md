# United Exteriors Group

Laravel + Inertia + React application for the United Exteriors design preview.

## Deploy to Laravel Cloud

Use these Laravel Cloud settings:

- Root directory: `.`
- PHP version: `8.3`
- Build command: `composer install --no-interaction --prefer-dist --optimize-autoloader && npm ci && npm run build`
- Deploy command: leave blank for the first preview deploy

## Environment variables

Set these in Laravel Cloud before the first deploy:

```env
APP_NAME="United Exteriors Group"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-cloud-domain.laravel.cloud
APP_KEY=base64:replace-this-with-your-generated-key

SESSION_DRIVER=cookie
CACHE_STORE=file
QUEUE_CONNECTION=sync
```

## Notes

- The front-end assets are built with Vite from `resources/js/app.jsx`.
- The Blade layout now references the Vite JS entry only, which also pulls in the CSS correctly for production builds.
- This preview does not need a database in Laravel Cloud unless you later add forms, auth, or admin features.
- If you later add forms or admin features, attach a database and then update the deploy command to run migrations.

## Local commands

```bash
composer install
npm install
npm run build
php artisan migrate
php artisan test
```
