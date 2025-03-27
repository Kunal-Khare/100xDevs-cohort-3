import React from "react";
import Useref from "./Useref";

//useRef --> it is used to access the dom element directly in react js,
// reference to a value, such that when you change the value it does not RE-RENDER the component

import {
  BrowserRouter, 
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    // we cannot use a tag for routing so we are using link and navlink
    // we are using link and navlink for routed links
    // we cannot use <Link/> outside the browser router, we have to use the link inside BrowserRouter
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route
              path="neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="neet/online-coaching-class-12"
              element={<Class12Program />}
            />
          </Route>
          <Route path="sign up" element={<Useref />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <Outlet />
      </div>
      <div>Footer | ContactUs</div>
    </div>
  );
}

function Header() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Allen</Link>
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Link to="sign up">Sign up</Link>
    </div>
  );
}

function Landing() {
  return (
    <div>
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
  const navigate = useNavigate();

  function redirector() {
    navigate("/");
  }

  return (
    <div>
      <h1>Class 12 Program</h1>
      <button onClick={redirector}>Go back to home page</button>
    </div>
  );
}

export default App;