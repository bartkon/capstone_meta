import Booking from "./Booking";
import ErrorPage from "../ErrorPage";
import Home from "./Home";

import { Routes, Route } from "react-router-dom";
import { useReducer } from 'react';



function Main() {


  const [availableTimes, updateAvailableTimes] = useReducer(timesReducer, [], initializeTimes);

  return (
    <main>
    
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage/>}></Route>
        <Route path="/booking" element={
          <Booking availableTimes={availableTimes} updateTimes={updateAvailableTimes}/>}>
        </Route>
      </Routes>
    
    </main>
  );
}

export default Main;


const timesReducer = (stateHours, date) => avaiableAtDate(date);
const initializeTimes = times => [17,18,19,20,21,22];

const avaiableAtDate = (date) =>{
  console.log("getting avaiable times for "+date);
  const timesArray = [17,18,19,20,21];
  return timesArray;
}


