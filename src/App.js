import React from 'react';
import Header from "./Components/Header";
import "./App.css";
import Template from "./Components/Template";
import Mainbody from "./Components/Mainbody";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Centeredtabs from './Components/Tabs';
import Formheader from './Components/Formheader';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/form/:id">
            <>
              <Formheader/>
              <Centeredtabs />
            </>
          </Route>
          <Route path="/">
            <>
              <Header />
              <Template />
              <Mainbody />
            </>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
