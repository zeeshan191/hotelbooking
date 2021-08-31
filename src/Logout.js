import React from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function Logout() {

  let history = useHistory();

  const notify = () => toast("Logged Out!");

  const logout = () => {
    console.log('m on call');
    notify();
    // localStorage.removeItem("whpf_user");
    // setLoggedOut(true)
    localStorage.removeItem('userDetails');
    localStorage.removeItem('userName');
    history.push("/");
    setTimeout(()=>{
      window.location.reload(true);
    },2000)
    
  };
  return (
    <>
      <button className="btn-primary" style={{ marginLeft: "93px" }} onClick={logout}>logout </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Logout

