import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, LIKES_INCREMENT, SET_RECS } from "./types";
import axios from "axios";


export function incrementLikes() {
    return {
        type: INCREMENT
    }
} 

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return{
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}

export function commentDelete(id) {
    return{
        type: COMMENT_DELETE,
        id
    }
}

export function likesIncrement(id) {
    return{
        type: LIKES_INCREMENT,
        id
    }
}

export const getReceipts = () => {
    return async  (dispatch) => {
        const response = await axios.get('https://tasty.p.rapidapi.com/recipes/auto-complete')
        dispatch(setReceipts(response.data))
    }
}

export const setReceipts = (repos) => ({type: SET_RECS, payload: repos})