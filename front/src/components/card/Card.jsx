import { Link, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions/actions";


const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const  myFavorites  = useSelector (state =>  state.myFavorites);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({id, name, status, species, gender, origin, image, onClose})
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className="border p-3 my-9 mx-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {isFav ? (
        <button onClick={handleFavorite}  
        className="rounded-sm bg-fuchsia-400 border-2 border-fuchsia-200 p-2.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500">❤️</button>
      ) : (
        <button onClick={handleFavorite} 
        className="rounded-sm bg-fuchsia-400 border-2 border-fuchsia-200 p-2.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500">🤍</button>
      )}
      {
       pathname !== "/favorites" ?
      <button onClick={() => onClose(id)} 
       className="rounded-sm bg-fuchsia-400 border-2 border-fuchsia-200 p-2.5 m-2.5 text-l font-semibold  hover:bg-fuchsia-300 hover:border-fuchsia-500">Close</button> 
      : null}
      
      <div >
      <Link to={`/detail/${id}`}>
        <h2 className="text-xl font-bold hover:text-pink-900" >Nombre: {name}</h2>
      </Link>
      <h3 className="text-xl font-bold ">Gender: {gender}</h3>
      </div>
      <img src={image} alt={name} className="rounded-sm object-contain "/>
    </div>
  );
};
export default Card;
