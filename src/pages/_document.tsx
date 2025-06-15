import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <link rel="icon" href="/icon.png" />

        <meta
          name="apple-mobile-web-app-title"
          content="Please Volvo Fix This"
        />
        <meta name="application-name" content="Please Volvo Fix This" />

        <meta property="og:site_name" content="Please Volvo Fix This" />
        <meta property="og:type" content={`og:website`} />
        <meta property="og:title" content="Please Volvo Fix This" />
        <meta property="og:image" content="/share.png" />
        <link
          href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-0 dark:bg-neutral-dark-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
