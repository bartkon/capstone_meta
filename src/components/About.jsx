import "./About.scss";
import image1 from "../images/Mario and Adrian A.png";
import image2 from "../images/Mario and Adrian b.png";

function About() {
  return (
    <section id="about-section">
     <div className="main-column row">
       <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </article>
       <figure>
        <img className="ai1" src={image1} />
        <img className="ai2" src={image2} />
       </figure>
      </div>
    </section>
  );
}

export default About;