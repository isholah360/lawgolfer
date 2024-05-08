import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./component/redux/store.js";
import Home from "./page/home/home.jsx";
import Login from "./page/login/login.jsx";
import Register from "./page/reg/reg.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={ <App />}>
             <Route path="/" element={<Home/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
