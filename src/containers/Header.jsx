import "./Header.scss"
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const handleClick = () => setMenu(false);
  
  return (
    <header>
      <div className="main-column row">
      <button onClick={toggleMenu} aria-label="Open and close menu" id="burger-button"><span></span></button>
        <a href={`/`} className="logo"><img src="assets/Logo.svg" alt="Little Lemon logo"/></a>
        <nav className={menu ? "open" : "closed"}>
          <ul>
            <li><a onClick={handleClick} href={`/#`}>HOME</a></li>
            <li><a onClick={handleClick} href={`/#about-section`}>ABOUT</a></li>
            <li><a onClick={handleClick} href={`/#highlight-section`}>MENU</a></li>
            <li><a onClick={handleClick} href={`/booking`}>RESERVATIONS</a></li>
            <li><a onClick={handleClick} href={`/#highlight-section`}>CLIENTS</a></li>

          </ul>
        </nav>
        <button id="basket-button" aria-label="Show your basket"><span></span></button>
      </div>
    </header>
  );
}

export default Header;
