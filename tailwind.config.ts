/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
        sm: ['14px', '20px'],
        base: ['16px', '20px'],
        h1: {
          '@media (min-width: 768px)': {
            fontSize: ['3.5rem'],
            fontWeight: ['500'],
            lineHeight: ['4.2rem'],
          },
          fontSize: ['2.5rem'],
          fontWeight: ['700'],
          lineHeight: ['3rem'],
        },
        h2: {
          '@media (min-width: 768px)': {
            fontSize: ['3rem'],
            fontWeight: ['500'],
            lineHeight: ['3.6rem'],
          },
          fontSize: ['2.25rem'],
          fontWeight: ['700'],
          lineHeight: ['2.7rem'],
        },
        h3: {
          '@media (min-width: 768px)': {
            fontSize: ['2.5rem'],
            fontWeight: ['500'],
            lineHeight: ['3rem'],
          },
          fontSize: ['2rem'],
          fontWeight: ['700'],
          lineHeight: ['2.4rem'],
        },
        h4: {
          '@media (min-width: 768px)': {
            fontSize: ['2rem'],
            fontWeight: ['500'],
            lineHeight: ['2.6rem'],
          },
          fontSize: ['1.5rem'],
          fontWeight: ['700'],
          lineHeight: ['2.1rem'],
        },
        h5: {
          '@media (min-width: 768px)': {
            fontSize: ['1.5rem'],
            fontWeight: ['500'],
            lineHeight: ['2.1rem'],
          },
          fontSize: ['1.25rem'],
          fontWeight: ['700'],
          lineHeight: ['1.75rem'],
        },
        h6: {
          '@media (min-width: 768px)': {
            fontSize: ['1.25rem'],
            fontWeight: ['500'],
            lineHeight: ['1.75rem'],
          },
          fontSize: ['1.125rem'],
          fontWeight: ['700'],
          lineHeight: ['1.575rem'],
        },
        large: {
          fontSize: ['1.25rem'],
          lineHeight: ['1.875rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        medium: {
          fontSize: ['1.125rem'],
          lineHeight: ['1.6875rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        regular: {
          fontSize: ['1rem'],
          lineHeight: ['1.5rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        small: {
          fontSize: ['0.875rem'],
          lineHeight: ['1.3125rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        tiny: {
          fontSize: ['0.75rem'],
          lineHeight: ['1.125rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      flex: {
        full: '0 0 100%',
      },
      maxWidth: {
        dashboard: 'var(--dashboard-container)',
      },
      width: {
        sidebar: 'var(--w-sidebar)',
      },
      height: {
        header: 'var(--header-h)',
      },

      text: {
        large: {
          light: {
            fontSize: ['1.25rem'],
            fontWeight: ['300'],
            lineHeight: ['2.1rem'],
          },
        },
      },
      zIndex: {
        header: 999,
      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        surface: 'hsl(var(--surface))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          gray: {
            '25': '#FCFCFD',
            '50': '#F9FAFB',
            '100': '#F2F4F7',
            '200': '#EAECF0',
            '300': '#D0D5DD',
            '400': '#98A2B3',
            '500': '#667085',
            '600': '#475467',
            '700': '#344054',
            '800': '#182230',
            '900': '#101828',
            '950': '#0C111D',
          },
          brand: {
            '25': '#F5FCFE',
            '50': '#F5FCFE',
            '100': '#ECF9FE',
            '200': '#D9F4FD',
            '300': '#BCEBFB',
            '400': '#91DEF8',
            '500': '#44C8F3',
            '600': '#27BFF1',
            '700': '#0FB8F0',
            '800': '#0D9AC9',
            '900': '#0A7DA3',
            '950': '#075873',
          },
          error: {
            '25': '#FFFBFA',
            '50': '#FEF3F2',
            '100': '#FEE4E2',
            '200': '#FECDCA',
            '300': '#FDA29B',
            '400': '#F97066',
            '500': '#F04438',
            '600': '#D92D20',
            '700': '#B42318',
            '800': '#912018',
            '900': '#7A271A',
            '950': '#55160C',
          },
          warning: {
            '25': '#FFFCF5',
            '50': '#FFFAEB',
            '100': '#FEF0C7',
            '200': '#FEDF89',
            '300': '#FEC84B',
            '400': '#FDB022',
            '500': '#F79009',
            '600': '#DC6803',
            '700': '#B54708',
            '800': '#93370D',
            '900': '#7A2E0E',
            '950': '#4E1D09',
          },
          success: {
            '25': '#F6FEF9',
            '50': '#ECFDF3',
            '100': '#D1FADF',
            '200': '#ABF5D1',
            '300': '#7AE7C7',
            '400': '#47D9B3',
            '500': '#14B78F',
            '600': '#0E8074',
            '700': '#047857',
            '800': '#05614D',
            '900': '#054C3E',
            '950': '#033520',
          },
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          light: 'hsl(var(--info-light))',
        },
        divider: 'hsl(var(--divider))',
        neutral: {
          '0': '#FFFFFF',
          '10': '#DADADA',
          '20': '#B5B5B5',
          '30': '#909090',
          '40': '#6B6B6B',
          '50': '#464646',
          '60': '#212121',
        },
        main: {
          DEFAULT: '#133C65',
          '0': '#ECF0F4',
          '10': '#DBE4ED',
          '20': '#DBE4ED',
          '30': '#B4D2F0',
          '40': '#6391C0',
          '50': '#133C65',
          '60': '#0B233A',
        },
        readonly: {
          DEFAULT: '#E6E6E6',
          border: '#B6B6B6',
        },
      },
      borderRadius: {
        '3xl': '36px',
        '2xl': '24px',
        xl: '16px',
        lg: '12px',
        md: '8px',
        sm: '4px',
        haft: '50%',
      },
      boxShadow: {
        active: '0 0 80px 0 rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export {};
