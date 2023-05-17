import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './scss/style.scss'
import { Provider } from "react-redux";
import { setupStore } from "./redux/store.ts";

const store = setupStore()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
