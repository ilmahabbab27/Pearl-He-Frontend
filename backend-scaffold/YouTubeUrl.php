<?php
namespace App\Rules;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
class YouTubeUrl implements ValidationRule {
    public function validate(string $attribute, mixed $value, Closure $fail): void {
        $url = is_string($value) ? parse_url($value) : false;
        $id = null;
        if ($url && in_array(strtolower($url['scheme'] ?? ''), ['http', 'https'], true) && !isset($url['user']) && !isset($url['pass']) && !isset($url['port'])) {
            $host = strtolower($url['host'] ?? '');
            $path = $url['path'] ?? '';
            if (in_array($host, ['youtu.be', 'www.youtu.be'], true) && preg_match('~^/([A-Za-z0-9_-]{11})/?$~D', $path, $match)) $id = $match[1];
            if (in_array($host, ['youtube.com', 'www.youtube.com', 'm.youtube.com'], true)) {
                if ($path === '/watch') { parse_str($url['query'] ?? '', $query); $id = $query['v'] ?? null; }
                elseif (preg_match('~^/(?:shorts|embed|live)/([A-Za-z0-9_-]{11})/?$~D', $path, $match)) $id = $match[1];
            }
        }
        if (!is_string($id) || !preg_match('/^[A-Za-z0-9_-]{11}$/D', $id)) $fail('Enter a valid YouTube video link (watch, share, Shorts, live or embed).');
    }
}
