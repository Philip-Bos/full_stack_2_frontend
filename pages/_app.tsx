import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
        <Component {...pageProps} />
    </>
  );
}
export default App;
