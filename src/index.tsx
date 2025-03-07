// You will not need to modify this file

import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
=======
import ReactDOM from "react-dom";
>>>>>>> 2f2ff1b (Initialize task-state)
=======
import ReactDOM from "react-dom/client";
>>>>>>> 6016326 (counter)
=======
import ReactDOM from "react-dom/client";
>>>>>>> 89be9a04ef1a0f8d102e6772d07cdacfe677b9c3
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6016326 (counter)
=======
>>>>>>> 89be9a04ef1a0f8d102e6772d07cdacfe677b9c3
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
<<<<<<< HEAD
<<<<<<< HEAD
    <React.StrictMode>
        <App />
    </React.StrictMode>
=======
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
>>>>>>> 2f2ff1b (Initialize task-state)
=======
    <React.StrictMode>
        <App />
    </React.StrictMode>
>>>>>>> 6016326 (counter)
=======
    <React.StrictMode>
        <App />
    </React.StrictMode>
>>>>>>> 89be9a04ef1a0f8d102e6772d07cdacfe677b9c3
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
