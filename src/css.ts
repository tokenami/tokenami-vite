import { createCss } from '@tokenami/css';
import config from '../.tokenami/tokenami.config';

export type * from '@tokenami/css';
export const css = createCss(
  config,
  // vite automatically escapes special chars in style
  // attributes so we prevent tokenami from doing it again
  { escapeSpecialChars: false },
);
