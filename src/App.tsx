import React from "react";
import styled from "@emotion/styled";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import SongList from "./components/Songs";
import MusicDetail from "./components/music-detail";
import EditSong from "./components/edit-song";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {" "}
        <Route path="/" Component={Home}></Route>
        <Route path="/songs" Component={SongList}></Route>
        <Route path="/about"></Route>
        <Route path="/songs/detail/:id" Component={MusicDetail}></Route>
        <Route path="/songs/detail/edit/:id" Component={EditSong}></Route>
      </Routes>
    </>
  );
}

export default App;
