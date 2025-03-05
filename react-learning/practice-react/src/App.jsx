import React from "react";
import User from "./conditional-rendering/User";
import List from "./lists/List";
import GamesList from "./lists/GamesList";
import Button from "./button/Button.jsx";
import Profile from "./button/Profile.jsx";
import MyComponent from "./Hooks/MyComponent.jsx";
import Counter from "./Hooks/Counter.jsx";
import Practise from "./Hooks/Practise.jsx";
import MyChange from "./onChange/MyChange.jsx";
import Update from "./updater-function/Update.jsx";
import Toogle from "./updater-function/Toogle.jsx";
import BgChanger from "./bgchanger/BgChanger.jsx";

export default function App() {
  return (
    <>
      <User />
      <GamesList />
      <Button />
      <Profile />
      <MyComponent />
      <Counter />
      <MyChange />
      <Update />
      <Toogle />
      <BgChanger/>
    </>
  );
}
