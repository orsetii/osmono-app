import { apiConfig } from "@/config/api";

export function ofetch(path: string) {
  return fetch(`${apiConfig.url}${path}`, {
  });
}


export function idfetch(path: string, user_id: string) {
  return fetch(`${apiConfig.url}${path}?${new URLSearchParams({ user_id: user_id })}`);
}

export function getToken(): string {
return ""
}

export function apiRedirect(path: string) {
  window.location.href = `${apiConfig.url}${path}`;
}
