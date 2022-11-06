import { Poppins } from '@next/font/google';

import 'styles/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => (
  <html lang="en" className={poppins.className}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
