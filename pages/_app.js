import { useEffect } from "react";
import Script from "next/script";
import AOS from "aos";
import "@fontsource/pacifico";
import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="0">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
