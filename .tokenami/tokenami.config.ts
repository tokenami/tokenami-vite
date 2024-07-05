import { type Config, createConfig, defaultConfig } from '@tokenami/css';

const theme = {
  alpha: {
    disabled: '0.6',
  },
  anim: {
    wiggle: 'wiggle 1s ease-in-out infinite',
  },
  color: {
    white: '#fff',
    'slate-100': '#f1f5f9',
    'slate-700': '#334155',
    'sky-500': '#0ea5e9',
  },
  font: {
    serif: 'serif',
    sans: 'sans-serif',
  },
  'font-size': {
    medium: '20px',
  },
  border: {
    none: '0',
  },
  radii: {
    rounded: '10px',
    circle: '9999px',
    none: 'none',
  },
  transition: {
    all: 'all 160ms',
  },
  size: {
    auto: 'auto',
    fill: '100%',
    'screen-h': '100vh',
  },
  surface: {
    'radial-gradient': 'radial-gradient(circle at top, var(--surface-from), var(--surface-to) 80%)',
  },
  shadow: {
    ring: '0 0 0 4px rgba(255 255 255 / 0.1)',
  },
} satisfies Config['theme'];

export default createConfig({
  include: ['./src/**/*.{ts,tsx}'],
  globalStyles: {
    body: {
      padding: '0',
      margin: '0',
    },
  },
  responsive: {
    md: '@media (min-width: 700px)',
  },
  theme: {
    modes: {
      light: {
        ...theme,
        color: {
          ...theme.color,
          primary: theme.color['sky-500'],
          secondary: theme.color['slate-100'],
          tertiary: theme.color['slate-700'],
        },
      },
      dark: {
        ...theme,
        color: {
          ...theme.color,
          primary: theme.color['sky-500'],
          secondary: theme.color['slate-700'],
          tertiary: theme.color['slate-100'],
        },
      },
    },
  },
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
  selectors: {
    ...defaultConfig.selectors,
    hover: ['@media (hover: hover) and (pointer: fine)', '&:enabled:hover'],
    light: '.theme-light &',
    dark: '.theme-dark &',
  },
  aliases: {
    'bg-color': ['background-color'],
    m: ['margin'],
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    mt: ['margin-top'],
    mr: ['margin-right'],
    mb: ['margin-bottom'],
    ml: ['margin-left'],
    p: ['padding'],
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
    pt: ['padding-top'],
    pr: ['padding-right'],
    pb: ['padding-bottom'],
    pl: ['padding-left'],
    size: ['width', 'height'],
  },
  properties: {
    ...defaultConfig.properties,
    'surface-from': ['color'],
    'surface-to': ['color'],
    'ring-color': ['color'],
  },
});
