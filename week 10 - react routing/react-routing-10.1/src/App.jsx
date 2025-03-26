import React from "react";
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
      {/*
      <a href="/">Allen</a>

      <a href="/neet/online-coaching-class-11">Class 11</a>

      <a href="/neet/online-coaching-class-12">Class 12</a>
      */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            ></Route>
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            ></Route>
            <Route path="/" element={<Landing />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Outlet />
      </div>
      Footer | ContactUs
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link>
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
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
  // using useNavigate() hook--

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
