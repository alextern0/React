import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";

const rootReducer = combineReducers({
   profile: profileReducer,
   messages: messagesReducer,
   chats: chatsReducer,
})

export const store = createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);