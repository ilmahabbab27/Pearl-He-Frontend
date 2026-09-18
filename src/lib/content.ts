import { useQuery } from '@tanstack/react-query';

export type ContentItem = {
  id: number; slug: string; title: string; name: string; category: string; sector: string;
  summary: string; description: string; detail: string; readTime: string; read_time: string;
  youtube_url: string | null;
  partner_name: string | null; partner_logo: string | null;
  gallery: (string | null)[]; images: string[]; image: string; alt: string; body: string[]; published: boolean;
};
export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); }
}
export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');
  if (init.method && init.method !== 'GET') {
    const csrf = await fetch('/api/csrf', { credentials: 'same-origin', headers: { Accept: 'application/json' } });
    if (!csrf.ok) throw new ApiError('Could not establish a secure session. Please retry.', csrf.status);
    headers.set('X-CSRF-TOKEN', (await csrf.json()).token);
  }
  const response = await fetch(`/api/${path}`, { ...init, headers, credentials: 'same-origin' });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new ApiError(data.errors ? Object.values(data.errors).flat().join(' ') : data.message || 'Unable to connect. Please try again.', response.status);
  }
  return response.status === 204 ? undefined as T : response.json();
}
export function useContent(kind: 'blogs' | 'projects') {
  return useQuery({ queryKey: ['content', kind], queryFn: () => api<ContentItem[]>(`content/${kind}`) });
}

export type SiteSettings = { hero_image: string; hero_alt: string };
export function useSiteSettings() {
  return useQuery({ queryKey: ['site-settings'], queryFn: () => api<SiteSettings>('settings') });
}
