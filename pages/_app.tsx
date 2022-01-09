import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
