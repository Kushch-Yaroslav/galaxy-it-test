import type {Metadata} from "next";
import {Montserrat} from 'next/font/google';
import "./globals.css";
import Header from "../components/organisms/header/Header";
import Footer from "../components/organisms/footer/Footer";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300','400', '500', '600', '700', '800'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Galaxy IT Test',
    description: 'Test task',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <Header/>
        {children}
        <Footer />
        </body>
        </html>
    );
}
