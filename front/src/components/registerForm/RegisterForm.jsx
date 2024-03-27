import axios from "axios";
import {  useState } from "react";
import validationsRegister from "./validationsRegister";


const RegisterForm = ({login}) => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});


    const handleUser = (event) =>{
        setUser({
          ...user,
          [event.target.name]: event.target.value  
        })
        setErrors(validationsRegister(user))
    }
  
    const handleSubmit = async (event) => {
        const endpoint = 'http://localhost:3001/rickandmorty/login'
        event.preventDefault()
        try {
            console.log("endpoint");
            const {data}= await axios.post(endpoint, user)
            console.log(data, "post");
            login(user)
            console.log(user);
            
        } catch (error) {
           alert ("ingreso denegado, por favor completar los campos") 
        }
    }
   
    return (
        <div className="flex flex-col justify-center content-center flex-wrap h-lvh" >
           <form 
           onSubmit={handleSubmit} 
           className=" md:w-2/5 p-5 md:h-3/4 flex flex-col justify-center rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-no-repeat bg-center ">
            <label htmlFor="email" className="text-center p-2 font-semibold text-xl">Email:</label>
            <input
            name="email"
            value= {user.email}
            onChange={handleUser}
            placeholder="Your email here!"
            className="rounded p-2.5 m-2.5 border-2 border-fuchsia-200 hover:border-fuchsia-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
            >
            </input>
            {errors.email && <p className="text-center p-2 font-semibold text-md">{errors.email}</p>}
            <label htmlFor="password" className="text-center p-2 font-semibold text-xl" >Password</label>
            <input
            name="password"
            value={user.password}
            onChange={handleUser}
            placeholder="New password here!"
            className="rounded p-2.5 m-2.5 border-2 border-fuchsia-200 hover:border-fuchsia-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
            >
            </input>
            {errors.password && <p className="text-center p-2 font-semibold text-md">{errors.password}</p>}
            <button  className="rounded p-2.5 m-2.5  text-xl font-semibold bg-fuchsia-400 border-2 border-fuchsia-200 hover:bg-fuchsia-300 hover:border-fuchsia-500">Enviar</button>
           </form>
        </div>
    )
}
export default RegisterForm;
