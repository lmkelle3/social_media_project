import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import friendsReducer from "./friends/reducer";
import conversationsReducer from "./conversations/reducer";
import messagesReducer from "./messages/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: usersReducer,
  statuses: statusesReducer,
  friends: friendsReducer,
  conversations: conversationsReducer,
  messages: messagesReducer
});

const middleware = [thunk, logger];

const enhancements = [applyMiddleware(...middleware)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(rootReducer, {}, compose(...enhancements));
