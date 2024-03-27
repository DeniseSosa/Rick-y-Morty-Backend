import { createStore, applyMiddleware,compose } from "redux";
import  thunkMiddleware from "redux-thunk";
import reducer from "../reducer/reducer"

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
 // esta linea es para conectar con la extension del navegador redux devtools

const store= createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    );

export default store;
