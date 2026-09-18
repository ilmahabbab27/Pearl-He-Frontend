<?php
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__.'/vendor/autoload.php';
$app = require __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
$config = config('database.connections.mysql');
echo 'Connecting to '.$config['host'].':'.$config['port'].' database '.$config['database'].PHP_EOL;
$db = new PDO('mysql:host='.$config['host'].';port='.$config['port'], $config['username'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 5]);
echo 'Connected'.PHP_EOL;
$db->exec('CREATE DATABASE IF NOT EXISTS `pearlhe_backend` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
echo "Database pearlhe_backend ready.\n";
