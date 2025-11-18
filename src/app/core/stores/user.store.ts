import { signal } from '@angular/core';

export interface User {
  id: string;
  email: string;
  display_name: string;
  phone: string;
  role: string;
  avatar_url: string;
  status: string;
}

export const userSignal = signal<User | null>(null);

export function setUser(user: User | null) {
  userSignal.set(user);
}

export function logout() {
  userSignal.set(null);
}

export function isLoggedInState(): boolean {
  return !!userSignal() && !!localStorage.getItem('access_token');
}
