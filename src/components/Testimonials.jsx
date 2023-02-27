import "./Testimonials.scss"
function Testimonials() {
  return (
    <section id="testimonials-section">
      <div className="main-column">
        <h1>Testimonials</h1>
        <div className="testimonials row">
          { testimonials.map( testim => {return(
            <article>
              <div className="row">
                <img  src={testim.image} />
                <p className="lead">{testim.name}</p>
              </div>
              <p>{testim.content}</p>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


const testimonials = [
  {
    name: "Clara",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Lorem  sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Tom",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
   {
    name: "Wojtek",
    image: "https://randomuser.me/api/portraits/men/2.jpg#https://randomuser.me/api/portraits/men/3.jpg",
    content: "Consectetur adipiscing, ut labore et dolore magna aliqua."
  },
   {
    name: "Angela",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    content: "Consectetur adipiscing elit,  incididunt ut labore et dolore magna aliqua."
  },
]