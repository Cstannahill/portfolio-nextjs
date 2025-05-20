// src/i18n/types.ts (or similar)
import { routing } from "@/i18n/routing";
export type Locale = (typeof routing.locales)[number];
