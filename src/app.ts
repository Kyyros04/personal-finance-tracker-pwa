import { createSSRApp, type App, type Component } from 'vue';
import componentMenu from './componentMenu.js';
import componentAuth from './componentAuthentication.js';
import componentNotes from './componentNotes.js';
import componentSpese from './componentSpese.js';

export const APP_SECTIONS = ['menu', 'notes', 'auth', 'expenses'] as const;
export type AppSection = (typeof APP_SECTIONS)[number];

const APP_COMPONENTS: Record<AppSection, Component> = {
  menu: componentMenu,
  notes: componentNotes,
  auth: componentAuth,
  expenses: componentSpese,
};

export function createApp(section: AppSection): App<Element> {
  return createSSRApp(APP_COMPONENTS[section]);
}
