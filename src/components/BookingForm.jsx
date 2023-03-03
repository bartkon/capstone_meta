import './BookingForm.scss';
import { useState, useEffect  } from "react";

const BookingForm = ({availableTimes=[], updateTimes=()=>null}) => {

   const [date, setDate] = useState(today());

   const handleDate = e => {
      e.preventDefault();
      setDate(e.target.value);
      console.log("date changed to: "+e.target.value);
      updateTimes(e.target.value);
   }
   const handleTime = e => {
      e.preventDefault();
      console.log(e.target.value);
   }
   const handleGuests = e => {
      e.preventDefault();
      if(e.target.value>10)
         e.target.value = 10;
      else if(e.target.value<1)
         e.target.value = 1;
   }
   const handleOccasion = e => {
      e.preventDefault();
      console.log(e.target.value);
   }


   useEffect(()=>{
      updateTimes(date);
   },[]);

   return (
   
         <form >
            <label htmlFor="res-date">Choose date</label>
               <input  type="date" id="res-date" onChange={handleDate} value={date}/>
            <label htmlFor="res-time">Time</label>
               <select onChange={handleTime} id="res-time">
               {availableTimes.map(time => <option key={time}>{time}:00</option>)}
               </select>
            <label htmlFor="guests">Guests</label>
               <input onChange={handleGuests} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
               <select onChange={handleOccasion} id="occasion">
                  <option>Birthday</option>
                  <option>Anniversary</option>
               </select>
            <input type="submit" className="button"value="Book Now" />
         </form>
  
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