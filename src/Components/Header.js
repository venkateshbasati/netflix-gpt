import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NetflixLogo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addGptMovieResults, addGptMovies, showGptSearch } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/appConfigSlice";


const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const gptSearch=useSelector((store)=>store.gpt.gptSearch)

  const handleSignOutButton =()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      {
      // dispatch(removeUser())  will happen from body component useAuth
      }
     
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
 
  
  useEffect(() => {

    const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed In
   

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, fullname: displayName, photoURL:photoURL }));
        navigate("/browse")
      } else {

   
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribe when component unmounts

    return  ()=>unsubcribe()
  }, []);

  const handleGptSearch=()=>{
    dispatch(showGptSearch())
    dispatch(addGptMovieResults())
    dispatch(addGptMovies())
  }
  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const handleNetflixLogo=()=>{
    navigate("/")
  }


  return (
    <div className=" absolute px-6 py-2  flex flex-col md:flex-row justify-between  bg-gradient-to-b w-full from-black z-10">
      <img onClick={handleNetflixLogo}
        className="w-48  mx-auto  md:mx-0 cursor-pointer"
        src={NetflixLogo}
        alt="Netflix Logo"
      ></img>
   
      { user &&(
        
        <div className="flex  justify-between md:mt-0 -mt-2 items-center">

         { gptSearch &&   <select className="px-4 py-1 m-2 text-base bg-black bg-opacity-75 text-white" onChange={handleLangChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>( <option key={lang.identifier}value={lang.identifier}>{lang.name}</option>))}
       
      
      </select>}
          <button className="bg-orange-400 text-black font-normal   px-2 md:px-3 py-2 mx-2 rounded-md" onClick={handleGptSearch}>{gptSearch? "Home Page": "GPT Search"}</button>
        <img
          src={user?.photoURL}
          className=" text-white md:inline-block  hidden m-1 w-[50px] h-[50px] rounded" alt='usericon'
        ></img>
        <button onClick={handleSignOutButton} className=" mx-1 px-1  rounded-md text-white font-semibold  text-lg">
          Sign Out
        </button>
      </div>)
}
    </div>
  );
};

export default Header;
