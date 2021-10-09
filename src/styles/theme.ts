import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    },
    colors: {
        brand: {
            200: 'hsl(281, 34%, 80%)',
            300: 'hsl(281, 34%, 75%);',
            400: 'hsl(281, 34%, 70%)',
            500: 'hsl(281, 34%, 60%)',
            600: 'hsl(281, 34%, 45%)'
        },
        gray: {
            100: 'hsl(206, 11%, 88%)',
            700: '#2F323A',
            800: '#141414',
            900: '#0A0A0A'
        }
    },
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    },
    components: {
        Button: {
            variants: {
                outline: {
                    border: '2px solid',
                    borderColor: 'brand.500',
                    color: 'brand.500'
                },
                solid: {
                    bg: 'brand.500',
                    color: 'gray.900'
                }
            },
            defaultProps: {
                colorScheme: 'brand'
            }
        },
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.100',
            },
            p: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            h1: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            h2: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            h3: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            div: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            span: {
                _selection: {
                    bg: 'brand.500'
                }
            },
            a: {
                _selection: {
                    bg: 'brand.500'
                }
            }
        }
    }
})