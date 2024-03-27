import {  useState } from "react";
import validation from "./validation";
import { Link } from "react-router-dom";
import log from "../../assets/Login.jpg"

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
    setErrors(validation(userData))
  };


  const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
  }



  return (
    <div className="flex flex-row place-content-center flex-wrap">
      <div className=" m-6 flex flex-row place-content-between">
        <img src={log} alt="Login Image" className=" p-4 w-2/6 md:w-1/5 absolute sm:left-3.5 md:left-36  rounded-full animate-spin-slow"/>
        <img src={log} alt="Login Image" className=" p-4 w-1/5 md:w-1/5 absolute sm:right-3.5 md:right-36 rounded-full animate-spin-slow"/>
      </div>
    <form  
    onSubmit={handleSubmit} 
    className=" md:w-2/5 p-5 md:h-3/4 absolute inset-y-40 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-no-repeat bg-center ">
      <div className="m-4 p-5 rounded-full">
      <label
       htmlFor="email" 
       className="flex text-3xl font-extrabold  justify-center bg-clip-text text-transparent bg-gradient-to-t from-pink-950 to-black">
        Email:
        </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        placeholder="Escriba aqui su email"
        onChange={handleChange}
        className="p-3.5 m-4 w-full rounded-full border-2 border-fuchsia-200 hover:border-fuchsia-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
      ></input>
      {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="m-4 p-3.5 rounded-full">
      <label htmlFor="password"
       className="flex text-3xl font-extrabold justify-center bg-clip-text text-transparent bg-gradient-to-t from-pink-900 to-black"
       >Password: </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="escriba aqui su contraseña"
        className="min-w-0 p-3.5 m-2.5 w-full rounded-full border-2 border-fuchsia-200 hover:border-fuchsia-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
      ></input>
      {errors.password &&<p>{errors.password}</p>}
      </div>
      <div className="flex place-content-between" >
      <div className="m-4">
        <Link  to="/register">
      <button 
      className=" bg-pink-500 hover:bg-indigoNeon text-slade-800  text-xl font-bold p-3.5 w-28 rounded-full ">Register</button>
     </Link>
      </div>
      <div className="m-4">
      <button 
      type="submit" 
      disabled={!userData.email || !userData.password || errors.email || errors.password}
      className="bg-indigoNeon hover:bg-pink-700 text-slade-800  text-xl font-bold p-3.5  w-28 rounded-full ">Login</button>
      </div>
      </div>
    </form>
    </div>
  );
};
export default Form;
