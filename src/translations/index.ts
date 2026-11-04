import { en } from './en';
import { bn } from './bn';

export type Language = 'en' | 'bn';
export type TranslationType = typeof en;

export const translations: Record<Language, TranslationType> = {
  en,
  bn,
};

