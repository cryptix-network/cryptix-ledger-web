import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'CpayVault',
    description: 'The frontend interface for your Ledger device',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <ColorSchemeScript />
                <link rel='shortcut icon' href='/favicon.ico' />
            </head>
            <body>
                <MantineProvider
                    defaultColorScheme='dark'
                    theme={{
                        fontFamily: 'Lato',
                        fontFamilyMonospace: 'Roboto Mono,Courier New,Courier,monospace',
                        colors: {
                            brand: [
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                                '#00bcd4',
                            ],
                        },
                        primaryColor: 'brand',
                    }}
                >
                    <Notifications />
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
