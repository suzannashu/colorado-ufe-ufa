// Lightweight client-side session flag for the dashboard prototype.
// There is no real backend auth; this simply persists a "logged out"
// state across refreshes so logout behaves like a real sign-out.

const STORAGE_KEY = "rck-dashboard-logged-out";

export function logOut() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, "true");
}

export function logIn() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function isLoggedOut() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}
