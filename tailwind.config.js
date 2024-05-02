const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.pug', './static/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1140px'
    },
    extend: {
      colors: {
        primary: '#074E64',
        secondary: '#709AB4',
        tertiary: '#A2C1D3',
        highlight: {
          '50': '#f9faeb',
          '100': '#f1f3d4',
          '200': '#e4e9ad',
          '300': '#d4dc89',
          '400': '#b9c655',
          '500': '#9cab37',
          '600': '#7a8828',
          '700': '#5d6823',
          '800': '#4b5420',
          '900': '#40481f',
          '950': '#21270c'
        }
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
