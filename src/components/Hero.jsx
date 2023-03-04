import "./Hero.scss";


function Hero() {
  return (
    <section id="hero-section">
      <div className="main-column row">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="lead" style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a className="button" aria-label="On Click" href={`/booking`}>Reserve a table</a>
        </article>
        <figure>
          <div className="image"></div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
