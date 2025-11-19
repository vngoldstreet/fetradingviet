import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
  {
    path: 've-chung-toi',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'lien-he',
    renderMode: RenderMode.Prerender,
  },
  {
    path: ':url',
    renderMode: RenderMode.Server,
  },
];
