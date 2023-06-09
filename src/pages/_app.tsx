import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
