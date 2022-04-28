import { get, writable } from "svelte/store";
import type { Readable } from "svelte/store";

import { browser } from "$app/env";

function _theme() {
  const { set, subscribe } = writable('');

  return {
    subscribe,
    update: (theme: Readable<string>) => get(theme),
    get: (theme: Readable<string>) => get(theme),
    set: (theme: string) => {
      if (!browser) return; // ignore during
      const currentTheme = document.querySelector('html')?.classList.contains('dark')
        ? 'dark'
        : 'light';
      set(theme);
      document.querySelector('html')?.classList.replace(currentTheme, theme);

      localStorage.setItem('theme', theme);
    },
    init: () => {
      if (!browser) return; // ignore during SSR

      if (
        !localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        set('dark');

        document.querySelector('html')?.classList.add('dark');

        localStorage.setItem('theme', 'dark');
      } else {
        const theme = localStorage.getItem('theme') || 'light';
        document.querySelector('html')?.classList.add(theme);

        set(localStorage.getItem('theme') || '');
      }
    },
    reset: () => {
      set('');
      browser ? localStorage.removeItem('theme') : null;
    }
  };
}

export const theme = _theme();