import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/actions-type";

const initialState={
    myFavorites: [],
    allCharactersFavorites: []
}
const reducer= (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return { 
                ...state,
                 myFavorites: action.payload, 
                 allCharactersFavorites:action.payload
                 };
        case REMOVE_FAV:
            return {
                 ...state, 
                 myFavorites: action.payload,
                 };
          
        case FILTER:
            if(action.payload === "All"){
                return {
                    ...state,
                    myFavorites: state.allCharactersFavorites
                }
            } else{

                return {
                    ...state,
                    myFavorites: [...state.allCharactersFavorites].filter((character)=> {
                        return character.gender == action.payload
                    })
                  }
             }
        case ORDER:
           const allCharactersOrdered= action.payload === "A"?
           [...state.myFavorites].sort((a,b)=>  a.id-b.id) 
           : [...state.myFavorites].sort((a,b)=> b.id-a.id)
            return {
                ...state,
                myFavorites: allCharactersOrdered
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;