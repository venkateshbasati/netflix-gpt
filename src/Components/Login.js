import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import loginValidate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { NetflixBackGroundLogo } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef=useRef(null)

  const handleSignInform = () => {

    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    const message = loginValidate(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (message) {
      setErrorMessage(message);
      return;
    }

    if (!signIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameRef.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJTIp2_YJXbRk5ZJb4Vsp1Y31wKkr7H_rYonQ6fNWx4TJc=s288-c-no"
          }).then(() => {
            // Profile updated!

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, fullname: displayName, photoURL:photoURL  }));
        

          }).catch((error) => {
            // An error occurred
           setErrorMessage(error.message)
          });        

       })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage( errorMessage.split(':')[1]);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;         
         
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage( errorMessage.split(':')[1]);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img  className=" fixed h-screen object-cover md:w-screen "
          src={NetflixBackGroundLogo}
          alt="Netflix BG Logo"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute bg-opacity-80   w-11/12 md:w-1/3  rounded-xl md:rounded-lg mx-auto left-0 right-0 my-36 text-white  py-10 px-12 "
      >
        <h2 className=" text-2xl md:text-3xl font-normal text-center  my-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h2>
        {!signIn && (
          <input ref={fullNameRef}
            type="text"
            placeholder=" Full Name "
            className="w-full rounded  bg-gray-700 p-2  my-4 "
          ></input>
        )}
        {!signIn && (
          <input
            type="number"
            placeholder=" Mobile Number "
            className="w-full rounded  bg-gray-700   p-2 my-4 "
          ></input>
        )}
        <input
          ref={emailRef}
          type="Email"
          placeholder=" Email Address "
          className="w-full rounded   bg-gray-700 p-2 my-4 "
        ></input>

        <input
          ref={passwordRef}
          type="password"
          placeholder=" Password "
          className="w-full rounded bg-gray-700  p-2 my-4 "
        ></input>
        <p className="p-1 text-base  text-white font-normal"> {errorMessage}</p>
        {
          //if the errormessage returns  null it wont show anything
          // we can validate fullname , mobile number just use regex function particular  for that
        }
        <button
          className="bg-red-600 font-medium w-full p-2 rounded-md    my-6"
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}{" "}
        </button>
        <span className="text-gray-400 font-extralight text-base">
          {" "}
          {signIn ? "New to Netflix? " : "Already Registered? "}
        </span>
        <span
          onClick={() => handleSignInform()}
          className="bg-transparent  hover:underline cursor-pointer font-medium"
        >
          {" "}
          {signIn ? "Sign Up Now." : "Sign In Now."}{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
