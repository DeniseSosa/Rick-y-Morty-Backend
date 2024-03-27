import Card from "../card/Card";

const Cards =({characters, onClose}) => {
    return (
        <div className="flex flex-wrap justify-center">
            { 
            characters?.map((character)=>{
                return( <Card 
                key={character?.id}
                id={character?.id}
                name={character?.name}
                species={character?.species}
                status={character?.status}
                gender={character?.gender}
                origin={character?.origin?.name}
                image={character?.image}
                onClose={onClose}
                />)
            })
            }
        </div>
    )
};
export default Cards;
