// import React here because Babel uses the React object when compiling JSX -> JS
import React from "react";
// import ReactDOM here because it enables us to render React elements to the DOM
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import bootstrap css into our component
// import "bootstrap/dist/css/bootstap.css";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
