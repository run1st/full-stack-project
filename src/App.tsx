import React from "react";
import styled from "@emotion/styled";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import SongList from "./components/Songs";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {" "}
        <Route path="/" Component={Home}></Route>
        <Route path="/songs" Component={SongList}></Route>
        <Route path="/about"></Route>
      </Routes>
    </>
  );
}

export default App;
