<?php
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__.'/vendor/autoload.php';
$app = require __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
if (App\Models\User::exists()) { echo "An administrator already exists; no credentials changed.\n"; exit; }
$password = bin2hex(random_bytes(12));
App\Models\User::create(['name' => 'Pearl Administrator', 'email' => 'admin@pearlheritance.local', 'password' => Illuminate\Support\Facades\Hash::make($password)]);
file_put_contents(storage_path('app/admin-credentials.local.txt'), "Admin URL: http://localhost:5173/admin\nEmail: admin@pearlheritance.local\nPassword: ".$password."\n");
echo "Administrator created. Credentials saved in storage/app/admin-credentials.local.txt\n";
