//dependencies
import axios from "axios";
// components
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
// Hooks
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RegisterForm from "./components/registerForm/RegisterForm";

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate()


  const onSearch = async(id) => {
    try{
      if (!characters.find((char) => char.id == id)) {
      const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        if(data.name) 
          setCharacters((oldChars) => [...oldChars, data]);
      }
    }catch(error){window.alert("¡No hay personajes con este ID!");}
  };

  const onClose = (id) => {
    const charFiltered = characters.filter((character) => {
      return character.id != id;
    });
    setCharacters(charFiltered);
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const login= async(userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      console.log(data);
       const { access } = data;
         setAccess(data);
          access && navigate('/home'); 
    } 
    catch (error) {
      window.alert("usuario incorrecto")
      
    }
  };
 



  return (
    <div className="bg-[url('./assets/Fondo-R&M.jpg')] bg-cover h-vh min-h-screen w-full">
      { pathname !== "/"  && <Nav onSearch={onSearch}/> && pathname !== "/register"  && <Nav onSearch={onSearch}/>  }
      <Routes>
        <Route path="/" element={<Form login={login}  />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/register" element={<RegisterForm login={login}/>}/>
      </Routes>
    </div>
  );
};

export default App;
