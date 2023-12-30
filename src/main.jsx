import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./../src/style.css";
import "./index.css";
import AppContextProvider from "./Component/AppContext/AppContext.jsx";
import { AuthProvider } from "./Component/AppContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </AuthProvider>
  </React.StrictMode>,
);
