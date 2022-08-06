
import { applyMiddleware,combineReducers,compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./Auth/Reducer"
import {ShoppinReducer as cartReduser} from "./Cart/Reducer" 

const rootReducer=combineReducers({
    auth:authReducer,
    cart:cartReduser
})

export const store=createStore(rootReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))