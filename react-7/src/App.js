import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";







// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index





const AppLayout  = () =>{
  return(
  <>

  <Header />
  <Body />
  <Footer />
 
  </>
  )
}
  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



