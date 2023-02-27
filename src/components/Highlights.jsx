import "./Highlights.scss";
import special1 from "../images/greek-salad.png"
import special2 from "../images/lemon dessert.jpg"
import special3 from "../images/bruchetta.png"

function Highlights() {

    
  return (
    <section id="highlight-section">
      <div className="main-column ">

        <div className="row strap">
          <h1>This Week Specials!</h1>
          <div>
            <button>Online Menu</button>
          </div>
        </div>

        <div className="row specials">
        {specials.map(special => {return(
          <article>
            <figure style={{backgroundImage: "url("+special.image+")"}}></figure>
            <div class="content">
              <div className="strap">
                <h3>{special.title}</h3>
                <h3 className="price">{special.price}</h3>
              </div>
              <p>{special.desciption}</p>
              <a href="#">Order a delivery</a>
            </div>
          </article>
        )})}
          
        </div>

      </div> 
    </section>
  );
}

export default Highlights;



 const specials = [
    {
      image: special1,
      title: "Trololo",
      price: 3.59,
      desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      image: special2,
      title: "Trololo2",
      price: 9.99,
      desciption: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      image: special3,
      title: "Trololo3",
      price: "7.00",
      desciption: "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ]