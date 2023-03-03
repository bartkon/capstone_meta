import "./Booking.scss";
import BookingForm from "../components/BookingForm";

function Booking({availableTimes, updateTimes}) {

  console.log("Got availableTimes: "+availableTimes)

  return (
    <section id="table-booking-section">
      <div className="main-column row">
        <div className="book-container">
          <h2>Book your table</h2>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
        </div>
        <div className="book-image">
          <figure></figure>
        </div>
        </div>
    </section>
  );
}

export default Booking;