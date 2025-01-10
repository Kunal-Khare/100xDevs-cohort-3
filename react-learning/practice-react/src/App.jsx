import React from "react";
import User from "./conditional-rendering/User";
import List from "./lists/List";
import GamesList from "./lists/GamesList";
import Button from "./button/Button.jsx";
import Profile from "./button/Profile.jsx";
import MyComponent from "./Hooks/MyComponent.jsx";
import Counter from "./Hooks/Counter.jsx";

export default function App() {
  return (
    <>
      <User />
      <GamesList />
      <Button />
      <Profile />
      <MyComponent />
      <Counter />
    </>
  );
}
