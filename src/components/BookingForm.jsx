import './BookingForm.scss';
import { useState } from "react";

const BookingForm = ({availableTimes=[], updateTimes=()=>null, onSubmitForm=()=>null}) => {

   const [date, setDate] = useState(today());
   const [time, setTime] = useState(availableTimes[0]);
   const [guests, setGuests] = useState(1);
   const [occasion, setOccasion] = useState("Birthday");
   const [dateValid, setDateValid] = useState(true);
   const [submited, setSubmited] = useState(false);
   
   const handleDate = e => {
      e.preventDefault();
      if(new Date(e.target.value) < new Date())
         setDateValid(false);
      else
         setDateValid(true);
      
      setDate(e.target.value);
      updateTimes(e.target.value);
   }
   const handleTime = e => {
      e.preventDefault();
      setTime(e.target.value);
   }
   const handleGuests = e => {
      e.preventDefault();
      if(e.target.value>10)
        setGuests(10);
      else if(e.target.value<1)
         setGuests(1)
      else setGuests(e.target.value);
   }
   const handleOccasion = e => {
      e.preventDefault();
      setOccasion(e.target.value);
   }
   const handleSubmit = e => {
      e.preventDefault();
      setSubmited(true);
}

   const handleConfirm = e => {
      e.preventDefault();
      const data = {
            date:date, 
            time:time, 
            guests: guests, 
            occasion:occasion,
      };
      onSubmitForm(data);     
   }


   return (
      <>
         <form onSubmit={handleSubmit} style={{display:submited? "none" : "grid"}}>
            <label htmlFor="res-date">Choose date <span className="invalid">{!dateValid? "(can't be past)" : ""}</span></label>
               <input  
               className={dateValid? null : "invalid"} 
               type="date" id="res-date" 
               onChange={handleDate} 
               min={today()}
               value={date}/>
            <label htmlFor="res-time">Time</label>
               <select onChange={handleTime} value={time} id="res-time" required>
               {availableTimes.map(time => <option key={time}>{time}</option>)}
               </select>
            <label htmlFor="guests">Guests</label>
               <input onChange={handleGuests} type="number" value={guests} min="1" max="10" id="guests" required/>
            <label htmlFor="occasion">Occasion</label>
               <select onChange={handleOccasion} value={occasion} id="occasion" required>
                  <option>Birthday</option>
                  <option>Anniversary</option>
               </select>

            <input type="submit" className="button" value="Book Now" disabled={!dateValid} />
         </form>

         <section className="overview" style={{display:!submited? "none" : "grid"}}>
            <p className="lead">
               Table for <span>{guests} guests</span> 
               reserved for <span>{date}</span> 
               at <span>{time}</span> 
               on the occasion of <span>{occasion}</span> .
            </p>
            <div className="row">
               <button className="edit-booking" onClick={()=>setSubmited(false)}>⏴Edit</button>
               <button className="confirm-booking" onClick={handleConfirm}>Confirm Booking</button>
            </div>
         </section>
      </>
  
   )
}

export default BookingForm;


const today = ()=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return  yyyy + "-" + mm + '-' + dd ;
}