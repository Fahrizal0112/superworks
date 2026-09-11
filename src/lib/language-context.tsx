"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

const STORAGE_KEY = "superworks-lang";

type Listener = () => void;
const listeners = new Set<Listener>();

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "id";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // ignore (private mode / storage blocked)
  }
  return "id";
}

let currentLang: Lang = readStoredLang();

function subscribe(callback: Listener) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Lang {
  return currentLang;
}

function getServerSnapshot(): Lang {
  return "id";
}

function setLangGlobal(next: Lang) {
  currentLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener());
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangGlobal }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
