import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <>
    <div className="max-h-80 max-w-80 absolute  md:top-64 md:right-16 lg:top-52 lg:right-48 xl:top-52 xl:right-80 md:size-1/2 bg-[url('./assets/infinity.png')]  bg-contain bg-no-repeat animate-spin-slow"></div>
    <div className="flex size-1/2 justify-center flex-wrap backdrop-brightness-500 bg-black/80 rounded p-8 m-8 border-4 border-indigoNeon shadow-2xl shadow-indigoNeon">
      <div className="flex flex-col self-center p-3.5">
      <h5 className="font-bold text-indigoNeon sm:text-sm md:text-base lg:text-lg xl:text-xl ">Name: {character?.name}</h5>
      <h5 className="font-bold text-indigoNeon sm:text-sm md:text-base lg:text-lg xl:text-xl ">Status:{character?.status}</h5>
      <h5 className="font-bold text-indigoNeon sm:text-sm md:text-base lg:text-lg xl:text-xl ">Specie: {character?.species}</h5>
      <h5 className="font-bold text-indigoNeon sm:text-sm md:text-base lg:text-lg xl:text-xl ">Gender:{character?.gender}</h5>
      <h5 className="font-bold text-indigoNeon sm:text-sm md:text-base lg:text-lg xl:text-xl ">Origin: {character?.origin?.name}</h5>
      </div>
      <div className=" flex-row object-contain self-center p-2.5">
      <img src={character?.image} alt={character?.name} className="rounded shadow-xl shadow-indigoNeon"/>
      </div>
    </div>
    </>
  );
};
export default Detail;
