<?php

use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

Artisan::command('admin:create', function () {
    $name = $this->ask('Admin name');
    $email = $this->ask('Admin email');
    $password = $this->secret('Password (at least 12 characters)');
    $validator = Validator::make(compact('name', 'email', 'password'), [
        'name' => 'required|string|max:255', 'email' => 'required|email|unique:users,email', 'password' => 'required|string|min:12',
    ]);
    if ($validator->fails()) { $this->error($validator->errors()->first()); return 1; }
    User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);
    $this->info('Administrator created. Sign in at the frontend /admin page.');
})->purpose('Create a CMS administrator');
