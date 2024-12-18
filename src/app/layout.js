import '@/styles/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: "سامانه شرکتی | ربو",
  description: "وب سایت شرکتی ربو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
         
          <Header />     
        
          <main>{children}</main>

      </body>
    </html>
  );
}
