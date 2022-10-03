import React from "react";
import '../styles/App.scss';
import Header from './Header'
import Main from "./main/Main";
import Nav from "./nav/Nav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
}

export default App;
