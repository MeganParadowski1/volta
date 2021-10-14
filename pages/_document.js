import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/email_icon_green.png" as="image" />
          <link rel="preload" href="/vimeo-logo-green.png" as="image" />
          <link rel="preload" href="/volta.mp4" as="video" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
