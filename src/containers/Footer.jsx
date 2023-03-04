import "./Footer.scss";
import logo from "../images/logo2.png";

function Footer() {
  return (
    <footer >
      <div className="main-column row">

        <img src={logo} alt="Little Lemon restgaurant logo"/>

        <article>
          <h3>Page map</h3>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#hero-section">Banner</a></li>
            <li><a href="/#highlight-section">Top 3</a></li>
            <li><a href="/#testimonials-section">Testimonials</a></li>
            <li><a href="/#about-section">About</a></li>
          </ul>
        </article>

        <article>
          <h3>Navigation</h3>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/#highlight-section">Menu</a></li>
          </ul>
        </article>

        <article>
          <h3>Bookings and Contact</h3>
          <ul>
            <li><a href="/booking">Book a Table</a></li>
            <li><a href="/booking">Contact</a></li>
            <li><a href="/booking">Order with Delivery</a></li>
 
          </ul>
        </article>

      </div>
    </footer>
  );
}

export default Footer;
