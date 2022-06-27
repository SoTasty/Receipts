import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { receiptsReducer } from "./receiptsReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    receiptsReducer
})