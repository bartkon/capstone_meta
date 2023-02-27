import "./Header.scss"

function Header() {

  return (
    <header className="header" >
      <div className="main-column row">
        <img src="assets/Logo.svg" />
        <nav>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RESERVATIONS</a></li>
            <li><a href="#">ORDER ONLINE</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
