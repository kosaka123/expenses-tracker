import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="d9ef9510-d3a2-4999-9438-3c5b3e866fd9" language="en-US">
    <Provider>
      <App />,
    </Provider>
    ,
  </SpeechProvider>,

  document.getElementById("root"),
);
