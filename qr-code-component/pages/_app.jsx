import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["outfit"],
  weight: ["400", "700"],
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>QR Component</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <main className={outfit.className}>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
