import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Store } from "./Store.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useclassName: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const GRAPH_QL_LINK = window.location.hostname.includes("localhost")
  ? "http://localhost:3120/api/"
  : "https://secure.avsonline.in/api/";

const client = new ApolloClient({
  uri: GRAPH_QL_LINK,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
