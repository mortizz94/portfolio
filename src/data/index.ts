
import { es } from './es';
import { en } from './en';
import type { Content } from './types';

export const content: Record<string, Content> = {
    es,
    en
};

export type Language = 'es' | 'en';
