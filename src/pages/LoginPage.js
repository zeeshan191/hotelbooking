/*eslint-disable*/

import React, { Component } from "react";
import axios from "axios";
import { HashRouter as Router } from "react-router-dom";
import Title from '../components/Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom"; 

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.stateReset = {
      email: "",
      password: "",
    };
    this.Result = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
    
  }  


  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }


  afterSubmit = (dataSet) => {
    //console.log()
    // localStorage.setItem('userName',JSON.stringify(dataSet[0].USER_NAME));
    // localStorage.setItem('userRole',JSON.stringify(dataSet[0].userrole));

    let activities = "";
    let userDetails = "";

    if (dataSet.length > 0) {
      for (var i = 0; i < dataSet.length; i++) {
        activities = dataSet[i].ACTIVITY_NAME + "," + activities;
      }

      userDetails = {
        userName: dataSet[0].USER_NAME,
        role: dataSet[0].userrole,
        activities,
      };

      localStorage.setItem("userDetails", (dataSet[0].USER_EMAIL));
      localStorage.setItem("userName", (dataSet[0].USER_FNAME));

      //console.log("activities - : ", activities)
        this.props.history.push('/');
      //setShow(!show);
    }
    //console.log();
    window.location.reload();
  };

  handleSubmit(event) {

    //console.log(this.state);
    axios
      .post("http://entemadb.entema-software.com/loginHotelValidation", {
        userEmail: this.state.email,
        userPwd: this.state.password,        
      })
      .then((res) => {
     
        console.log(res.data);
        //this.notify();
        this.afterSubmit(res.data);
      });
    event.preventDefault();
  }

  redirectTo() {
    this.props.history.push("/Reg");
  }
  render() {
    return (
      <>
     
          <div className="App">
            <div className="appAside" >
              <img src='pexels.jpg' width='100%' height='100%' />
            </div>
            <div className="appForm">
              <Title title="Sign-In" />
              <div className="col-sm-14">
                <div className="formCenter">
                  <form className="formFields">
                    <div className="formField">
                      <label className="formFieldLabel" htmlFor="email">
                        E-Mail Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="formFieldInput"
                        placeholder="Enter your email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>  

                    <div className="formField">
                      <label className="formFieldLabel" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="formField">
                      <button className="btn-primary" onClick={this.handleSubmit}>
                        Sign In
                      </button>{" "}
                      <h6 style={{paddingTop:"10px"}}>
                        if u didn't register click on
                        <text onClick={()=>this.props.history.push("/Reg")}style={{color:"blue", cursor:"pointer"}}> Sign up.</text></h6>

                    </div>
                  </form>
                </div>
              </div>




            </div>
          </div>
     
      </>
    )
  }
};

export default SignInForm;