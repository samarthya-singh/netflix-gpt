import React, { useRef, useState } from "react";
import Header from "./Header";
import { FormValidation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [toggelForm, settoggelForm] = useState(false);
  const [errormsg, seterrormsg] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handelForm = () => {
    const message = FormValidation(email.current.value, password.current.value);
    seterrormsg(message);
    if (message) return;
    if (toggelForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
             
    
            })
            .catch((error) => {
              
            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);

          seterrormsg(errorCode + " " + errorMessage);
        });
    } else {
      // singn in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrormsg(errorCode + " " + errorMessage);
        });
    }

    // console.log(message);
  };

  const toggelLoginForm = () => {
    settoggelForm(!toggelForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute  h-screen ">
        <img
          className="object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
          alt="bg-image"
        ></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 bg-black mx-auto flex flex-col gap-6 my-32 right-0 left-0 p-14 opacity-85"
      >
        <h2 className="text-white text-3xl font-bold mb-6">
          {toggelForm ? "Sign Up" : "Sign In"}
        </h2>
        {toggelForm && (
          <input
            ref={name}
            type="Name"
            name="Name"
            placeholder="Enter Your Name "
            className="w-full p-4 bg-gray-800/80 text-white border border-gray-500 rounded-md outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Email or mobile number"
          className="w-full p-4 bg-gray-800/80 text-white border border-gray-500 rounded-md outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-4 bg-gray-800/80 text-white border border-gray-500 rounded-md outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
        />

        <p className="text-red-800 text bold">{errormsg}</p>
        <button
          type="submit"
          onClick={handelForm}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition duration-200"
        >
          {toggelForm ? "Sign Up" : "Sign In"}
        </button>

        <p className="cursor-pointer text-white" onClick={toggelLoginForm}>
          {toggelForm
            ? " Alredy Have Account Sing In"
            : "Don't have Account Sing Up "}
        </p>
      </form>
    </div>
  );
};

export default Login;
