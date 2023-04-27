import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import registrationimage from "../../Assets/image1.jpg";
// import { firebasecontext, Firebaseprovider, auth } from "../Context";
import { Usefirebase } from "../Context";

import "./Registration.css";
const Registration = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const context = Usefirebase();

  console.log("context", context);
  const onsubmithandler = (event) => {
    event.preventDefault();
  };
  // console.log(register);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center main-div">
        <div className="row border second-main-div  ">
          <div className="col-sm-6   border border-danger d-flex justify-content-center  px-0 first-col">
            <div className="border form-main-div">
              <h1 className="heading ">Sign up</h1>
              <form className=" mt-4" onSubmit={onsubmithandler}>
                <div className="email-field-div mt-5">
                  <MdEmail className=" email-icon"></MdEmail>
                  <input
                    type="email"
                    placeholder="Email"
                    className="email-input"
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                </div>
                <div className="mt-5 password-field-div">
                  <RiLockPasswordFill className="password-icon"></RiLockPasswordFill>
                  <input
                    type="password"
                    placeholder="Password"
                    className="password-input"
                    onChange={(e) => setpassword(e.target.value)}
                  ></input>
                </div>
                <button type="submit" className="register-button mt-5">
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-6  border border-primary px-0 second-col ">
            <img
              src={registrationimage}
              alt="none"
              className="register-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
