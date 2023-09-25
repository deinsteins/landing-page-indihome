import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { withGA, WithGAProps } from "../../google-analytics";

function App({ Component, pageProps }: AppProps & WithGAProps) {
  return <Component {...pageProps} />;
}

// @ts-ignore
export default withGA(App);
