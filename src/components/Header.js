import React from "react";
import '../styles/Header.scss'
import BirdLogo from "../uikit/bird";
import BurgerMenu from "../uikit/burger-menu";
import UsernameContainer from "./header/usernameContainer";

function Header() {
  return (
    <div className='Header'>
      <BirdLogo/>
      <UsernameContainer />
      <BurgerMenu/>
    </div>
  );
}

export default Header;
