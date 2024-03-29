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
            primary: {
                DEFAULT: '#00549CFF',
                light: '#d0efff',
            },
            complementary: {
                DEFAULT:'#dbe5ef'
            },
            spice: {
                DEFAULT: '#EEA47FFF',
                light:'#FFD247',
                extralight: '#ffb347'
            },
            tertiary: {
                DEFAULT: '#FF605C'
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