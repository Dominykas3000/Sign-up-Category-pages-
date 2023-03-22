import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import profile from "./Reducers";

const rootReducer = combineReducers({
  profile,
});

const configureStore = () => {
  return legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
