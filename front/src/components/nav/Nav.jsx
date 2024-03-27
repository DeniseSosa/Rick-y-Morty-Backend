import { useLocation } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";


const Nav = ({ onSearch }) => {

  const {pathname} = useLocation();

  return (
    <nav>
      <div className="flex flex-wrap justify-around  bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" >
      
      {pathname !== '/about' &&
      <Button link="/about" name="About"/>
    }
    {pathname !== '/home' &&
      <Button link="/home" name="Home"/>
    }
      {pathname === '/home' &&
      <div>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826))} className="rounded bg-fuchsia-400 border-2 p-2.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500 text-xl  font-semibold flex table-row ">
        Random Character
      </button>
      </div>
}
{ pathname === '/home' &&
      <SearchBar onSearch={onSearch}/>
      }
      <Button link="/favorites" name="Favorites" />
      <Button link="/" name="Logout" />
      </div>
    </nav>
  );
};
export default Nav;
//  <Link to='/about'>
// <button> // En vez de hacer todo este codigo hago un componente ue se llama Button y le paso link y name x ejemplo
//     About
// </button>
// </Link>
// <Link to='/home'>
// <button>
//     Home
// </button>
// </Link>
// <Link to="/favorites">
// <button>
//     Favorites
// </button>
// </Link>
// <Link to= "/">
// <button >
//     Logout
// </button>
// </Link>
