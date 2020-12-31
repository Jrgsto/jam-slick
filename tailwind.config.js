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
                light: '#333333'
            },
            //yellow
            primary: {
                DEFAULT: '#F3B114',
                dark: '#D17428',
                light: '#FBECDB',
            },
            //green
            complementary: {
                DEFAULT:'#9C8E5E',
                dark:'#58511C'
            },
            //red
            spice: {
                DEFAULT: '#E6535E',
                light:'#FFD247',
            },
            // not used
            tertiary: {
                DEFAULT: '#FBECDB'
            }
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
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