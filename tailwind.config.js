const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.pug', './static/**/*.html'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px'
    },
    extend: {
      colors: {
        primary: '#074E64',
        secondary: '#F779EE'
      }
    },
    container: {
      center: true,
      padding: '1.5rem'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem'
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { fontSize: theme('fontSize.base')},
        h1: { fontSize: theme('fontSize.4xl'), fontWeight: '500' },
        h2: { fontSize: theme('fontSize.3xl'), fontWeight: '500' },
        h3: {
          color: theme('colors.primary'),
          fontSize: theme('fontSize.2xl'),
          fontWeight: '500'
        },
        h4: {
          color: theme('colors.primary'),
          fontSize: theme('fontSize.xl'),
          fontWeight: '500'
        },
        h5: {
          color: theme('colors.primary'),
          fontSize: theme('fontSize.lg'),
          fontWeight: '500'
        },
        h6: {
          color: theme('colors.primary'),
          fontSize: theme('fontSize.base'),
          fontWeight: '500'
        },
        p: {
          marginBottom: theme('spacing.3'),
          lineHeight: theme('lineHeight.8')
        },
        b: { fontWeight: '700' },
        strong: { fontWeight: '500' },
        small: { fontSize: theme('fontSize.sm') }
      })
    })
  ]
}
