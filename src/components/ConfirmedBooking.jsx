import "./ConfirmedBooking.scss"
import { Navigate } from "react-router-dom";

const ConfirmedBooking = ({booking}) => {
	console.log("booking-confirmation")
	if(!booking) 
		return <Navigate to="/booking" replace={true} />
	else return (
		<section className="booking-confimation">
			<div className="main-column">
				<h1>✓</h1>
				<h2>Booking Complete</h2>
				<h3>Your table in Little Lemon is booked on {booking.date} at {booking.time}!</h3>
				<p className="lead">See you and your {booking.guests-1} guests at {booking.occasion}!</p>
				<a className="button" href="/">Finish</a>
			</div>
		</section>
	)
		

	
}
export default ConfirmedBooking;