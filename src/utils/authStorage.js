const CURRENT_ACCOUNT_KEY = "shoe_store_current_account";

function safeParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function getCurrentAccount() {
  if (typeof window === "undefined") return null;
  return safeParse(window.localStorage.getItem(CURRENT_ACCOUNT_KEY), null);
}

export function setCurrentAccount(account) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CURRENT_ACCOUNT_KEY, JSON.stringify(account));
}

export function clearCurrentAccount() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CURRENT_ACCOUNT_KEY);
}
