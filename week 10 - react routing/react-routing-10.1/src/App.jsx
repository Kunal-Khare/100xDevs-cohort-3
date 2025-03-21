
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // we cannot use a tag for routing so we are using link and navlink
    // we are using link and navlink for routed links
    // we cannot use <Link/> outside the browser router, we have to use the link inside BrowserRouter
    <div>
    
     {/*
      <a href="/">Allen</a>

      <a href="/neet/online-coaching-class-11">Class 11</a>

      <a href="/neet/online-coaching-class-12">Class 12</a>
      */}

      <BrowserRouter>
      <Link to="/">Allen</Link>
      <Link to="/neet/online-coaching-class-11" >Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          ></Route>
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          ></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return (
    <div>
      {" "}
      <h1>Welcome to Allen</h1>
    </div>
  );
}

function Class11Program() {
  return (
    <div>
      <h1>Class 11 Program</h1>
    </div>
  );
}

function Class12Program() {
  return (
    <div>
      <h1>Class 12 Program</h1>
    </div>
  );
}

export default App;
