import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { withGA } from "../../google-analytics";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// @ts-ignore
export default withGA(App);
