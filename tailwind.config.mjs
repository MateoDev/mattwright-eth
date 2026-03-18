/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3E9',
        'dead-black': '#0A0A0A',
        amber: '#D4A017',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        4: '4px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#0A0A0A',
            '--tw-prose-headings': '#0A0A0A',
            '--tw-prose-links': '#D4A017',
            '--tw-prose-bold': '#0A0A0A',
            '--tw-prose-counters': '#0A0A0A',
            '--tw-prose-bullets': '#0A0A0A',
            '--tw-prose-code': '#F7F3E9',
            '--tw-prose-pre-code': '#F7F3E9',
            '--tw-prose-pre-bg': '#1a1a1a',
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              fontFamily: '"Space Mono", monospace',
              fontWeight: '400',
              backgroundColor: '#1a1a1a',
              color: '#F7F3E9',
              padding: '0.125rem 0.375rem',
              borderRadius: '0',
            },
            pre: {
              fontFamily: '"Space Mono", monospace',
              backgroundColor: '#1a1a1a',
              color: '#F7F3E9',
              borderRadius: '0',
              border: '2px solid #0A0A0A',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
