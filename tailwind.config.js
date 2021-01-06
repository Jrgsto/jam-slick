const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
    future: { // for tailwind 2.0 compat
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        uniformColorPalette: true,
        extendedFontSizeScale: true,
        applyComplexClasses: true,
    },
    purge: {
        mode: 'all',
        content: ['./src/**/*.svelte', './src/**/*.html'],
    },
    theme: {
        colors: {
            white: {
                DEFAULT: '#fff',
            },
            black: {
                DEFAULT:'#000000',
                light: '#373737'
            },
            //yellow
            primary: {
                DEFAULT: '#FFD88C',
                dark: '#D17428',
                light: '#FFBC8C',
            },
            //green
            complementary: {
                DEFAULT:'#9BC1BC',
                dark: '#59739B',
                darkest: '#373737'
            },
            //red
            spice: {
                DEFAULT: '#ED6A5A',
                light:'#FFD247',
            },
            // not used
            tertiary: {
                DEFAULT: '#EDECEA'
            }
        },
        fontFamily: {
            lato: ['Lato', 'sans-serif'],
        },
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        minWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        maxWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'screen-lg': '1024px'
        },
    },
    variants: {
        extend: {
            // ...
            fontWeight: ['hover'],
        }
    }
};