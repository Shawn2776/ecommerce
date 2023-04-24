import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <div className={oswald.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
