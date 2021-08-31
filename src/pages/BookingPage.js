/*eslint-disable*/

import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import axios from "axios";
import { useHistory } from "react-router-dom";

function BookingPage(props) {
  const history = useHistory();

  const [bpName, setbpName] = useState();
  const [bpNumber, setbpNumber] = useState();
  const [bpEmail, setbpEmail] = useState(localStorage.getItem("userDetails"));
  const [bpInDate, setbpInDate] = useState();
  const [bpOutDate, setbpOutDate] = useState();

  var slug = props.match.params.slug;

  const handleChangeEvent = (e) => {
    console.log("e : ", e);
    const input = e.target.name;
    console.log("field name : ", e.target.name + "- value -", e.target.value);

    if (input === "bpName") {
      setbpName(e.target.value);
    } else if (input === "bpNumber") {
      setbpNumber(e.target.value);
    } else if (input === "bpEmail") {
      setbpEmail(e.target.value);
    } else if (input === "bpInDate") {
      setbpInDate(e.target.value);
    } else if (input === "bpOutDate") {
      setbpOutDate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://entemadb.entema-software.com/insertBookRoomData", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },

        bookFullName: bpName,
        bookRoomType: slug,
        bookPhoneNumber: bpNumber,
        bookEmail: bpEmail,
        bookCheckInDate: bpInDate,
        bookCheckOutDate: bpOutDate,
      })
      .then((res) => {
        console.log("updated Values Successfully : ", res.data);
      });

    console.log("test submit");
    history.push("/bookings");
  };

  return (
    <>
      <div className="container">
        <Title title="Booking" style={{ paddingTop: "10%" }} />
        <div className="bookingform">
          <div className="formCenter">
            <form onChange={handleChangeEvent} onSubmit={handleSubmit}>
              <div className="formField" style={{ color: "black" }}>
                <label
                  className="formFieldLabel "
                  htmlFor="name"
                  style={{ color: "black" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="bpName"
                  className="formFieldInput"
                  placeholder="Enter your full Name"
                  name="bpName"
                  value={bpName}
                  required
                />
              </div>

              <div className="formField">
                <label
                  className="formFieldLabel"
                  htmlFor="number"
                  style={{ color: "black" }}
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="bpNumber"
                  className="formFieldInput"
                  placeholder="Enter your Phone Number"
                  name="bpNumber"
                  value={bpNumber}
                  required
                />
              </div>

              <div className="formField">
                <label
                  className="formFieldLabel"
                  htmlFor="email"
                  style={{ color: "black" }}
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="bpEmail"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="bpEmail"
                  value={bpEmail}
                  required
                  disabled
                />
              </div>

              <div className="formField">
                <label
                  className="formFieldLabel"
                  htmlFor="date"
                  style={{ color: "black" }}
                >
                  Check-in Date
                </label>
                <input
                  type="Date"
                  id="bpInDate"
                  className="formFieldInput"
                  placeholder="Enter your check-in Date"
                  name="bpInDate"
                  value={bpInDate}
                  required
                />
              </div>

              <div className="formField">
                <label
                  className="formFieldLabel"
                  htmlFor="date"
                  style={{ color: "black" }}
                >
                  Check-out Date
                </label>
                <input
                  type="Date"
                  id="bpOutDate"
                  className="formFieldInput"
                  placeholder="Enter your Check-out"
                  name="bpOutDate"
                  value={bpOutDate}
                  required
                />
              </div>

              <div className="formField">
                <button className="btn-primary" style={{ marginBottom: "8%" }}>
                  Submit
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
