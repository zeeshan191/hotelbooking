/*eslint-disable*/

import React, { useState } from "react";
import axios from "axios";
import Title from '../components/Title';
import { HashRouter as Router } from "react-router-dom";
// import Register from './Register';
// import LoginPage from './LoginPage'
import { useHistory } from "react-router";


function RegistrationForm(props) {
  const history = useHistory();

  let onSubmitTemplate = {
    name: "",
    email: "",
    password: "",
    phone: "",
    successMessage: null,
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const alreadyExist = () => {
    history.push('/sign-in');
  };

  const sendDetailsToServer = (e) => {
    e.preventDefault();
    console.log(state);
    if (state.name && state.email && state.password && state.phone !== "") {
      console.log(state);
      axios
        .post("http://entemadb.entema-software.com/insertHotelUserData", {
          userFullName: state.name,
          userPhoneNumber: state.phone,
          userEmail: state.email,
          userPwd: state.password,
          //userCreatedDate: state.userCreatedDate,
        })
        .then(() => {
          alert("Submitted");
          setState(onSubmitTemplate);
          redirectToHome();
        });
    }
  };
  const redirectToHome = () => {
    //props.updateTitle('Home')
    history.push("/sign-in");
  };

  const redirectToLogin = () => {
    //props.updateTitle('Login')
    history.push("/login");
  };
  return (
    <>
      
        <div className="App">
          <div className="appAside" >
            <img src='pexels.jpg' width='100%' height='100%' />
          </div>
          <div className="appForm">
            <Title title="Sign-Up" />
            <div className="formCenter">
              <form className="formFields">
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="name">
                    {" "}
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    id="name"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="phone">
                    Phone Number{" "}
                  </label>
                  <input
                    type="number"
                    className="formFieldInput"
                    id="phone"
                    placeholder="Enter phone number"
                    value={state.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    className="formFieldInput"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">
                    E-Mail{" "}
                  </label>
                  <input
                    type="email"
                    className="formFieldInput"
                    id="email"
                    value={state.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>

                <div className="formField">
                  <button className="btn-primary" onClick={sendDetailsToServer}>
                    Sign Up
                  </button>{" "}
                  <h6 style={{ paddingTop: "10px" }}>
                    if u already register click on
                    <text onClick={()=>history.push("/sign-in")} style={{color:"blue", cursor:"pointer"}}> Sign In.</text></h6>

                </div>
              </form>
            </div>



          </div>
        </div>
      
    </>
  )
}

export default RegistrationForm;