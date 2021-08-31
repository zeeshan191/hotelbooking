/*eslint-disable*/

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import BookingPage from "../src/pages/BookingPage";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isHidden,setIsHidden]=React.useState(false);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/bookingpage/:slug" component={BookingPage} />
        <Route exact path="/bookings" component={Bookings} />
        <Route path="/sign-in" component={LoginPage} />
        <Route exact path="/Reg" component={Register} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
