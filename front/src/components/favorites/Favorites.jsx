import { useSelector , useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";
import Cards from "../cards/Cards"

const Favorites = () => {
  const {myFavorites} = useSelector(state => state);
  const dispatch = useDispatch();
  const[aux, setAux] = useState(false)


    const handleSelect = (event) => {
      if(event.target.name === "order"){
        dispatch(orderCards(event.target.value))
        setAux(true)
      } else{
        dispatch(filterCards(event.target.value))
      }
    }
  
  return (
    <div>
      <div className="flex justify-center">
     <select onChange={handleSelect} name="order" className="rounded bg-purple-500 border-2 border-fuchsia-200 p-1.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500 text-xl font-semibold ">
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleSelect} name="filter" className="rounded bg-purple-500 border-2 border-fuchsia-200 p-1.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500 text-xl font-semibold ">
        <option value= "All">All Favorites</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      </div>
       <Cards characters = {myFavorites}/>
    </div>
  );
};
export default Favorites;
