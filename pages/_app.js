import { Provider } from "react-redux";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import store from "../FrontEndServices/Store/store";
import { PrimeReactProvider } from "primereact/api";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
    
      <SessionProvider session={session}>
        {" "}
        <PrimeReactProvider>
        <Component {...pageProps} />
        </PrimeReactProvider>
      </SessionProvider>
      
    </Provider>
  );
}

export default MyApp;
