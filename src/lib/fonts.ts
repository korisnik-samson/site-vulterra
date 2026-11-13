import localFont from "next/font/local";

export const onest = localFont({
    src: [
        { path: '../../node_modules/@fontsource-variable/onest/files/onest-latin-wght-normal.woff2', weight: '400 700' },
        { path: '../../node_modules/@fontsource-variable/onest/files/onest-latin-ext-wght-normal.woff2', weight: '400 700' },
    ],
    variable: '--font-onest',
    display: 'swap'
})