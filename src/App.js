import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Main from "./containers/Main";
import './App.css';
import {  BrowserRouter } from "react-router-dom";


function App({children}) {
  

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


