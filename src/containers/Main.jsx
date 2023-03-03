import Booking from "./Booking";
import ErrorPage from "../ErrorPage";
import Home from "./Home";
import ConfirmedBooking from "../components/ConfirmedBooking"

import { fetchAPI, submitAPI } from "../API";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from 'react';


function Main() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(false);

  const submitForm = (data) =>{
    if(submitAPI(JSON.stringify(data))){
      setBookingData(data);
      navigate("/confirmed-booking");
    }
  }

  const [availableTimes, updateAvailableTimes] = useReducer(timesReducer, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage/>}></Route>
        <Route path="/booking" element={
          <Booking 
          availableTimes={availableTimes} 
          updateTimes={updateAvailableTimes}
          onSubmitForm={submitForm}/>
        }>
        </Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking booking={bookingData}/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;


const timesReducer = (stateHours, date) => avaiableAtDate(date);
const initializeTimes = times => fetchAPI(new Date());

const avaiableAtDate = (date) =>{
  const date_o = new Date(date)
  const timesArray = fetchAPI(date_o);
  return timesArray;
}

