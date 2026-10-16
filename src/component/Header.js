import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { adduser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

    useEffect(() => {
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            adduser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }),
          );
          navigate('/browse')
        } else {
          dispatch(removeUser());
          navigate("/");

        }
     });
      return () => unsubscribe();
      // return unsubscribe();

    }, []);
  const handelClick = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");

      });

    
  }
  return (
    <div className="absolute w-full px-16 py-4  bg-gradient-to-b from-black z-20 flex justify-between">
      <div>
        <img
          className="w-40 "
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
        ></img>
      </div>

      {user && <div className='flex self-center gap-2'>
        <img
          className='w-12'
          src="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229">
          
        </img>
        <span className='text-white cursor-pointer' onClick={handelClick}>(Sign Out)</span>
      </div>}
    </div>
  );
}

export default Header
