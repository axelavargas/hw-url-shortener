import { createStore, combineReducers, applyMiddleware } from "redux";
import shortenedLinkReducer from "./reducers/shortenedLinkReducer"
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const store = createStore(
	combineReducers(
		{shortenedLinkReducer}), 
		{}, 
		applyMiddleware(createLogger(), thunk, promise())
	);

export default store;