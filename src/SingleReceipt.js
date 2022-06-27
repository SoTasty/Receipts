import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { commentCreate, commentUpdate, commentDelete } from './redux/actions'
import ReactIcon from "./logo192.png"
import { likesIncrement } from "./redux/actions"

function SingleReceipt({data}) {
    const { title, id, likes } = data
    const dispatch = useDispatch()

    const handlerLike = (e) => {
        dispatch(likesIncrement)
    }

    return (
        <div className="singleReceipt__wrap">
            <div className="singleReceipt__wrap__wrapper1">
                <img alt="img" src={ReactIcon}></img>
                <button onClick={handlerLike}>yummy!{likes}</button>
            </div>
            <div className="singleReceipt__wrap__wrapper2">
                <p>{title}</p>
            </div>

        </div>
    )
}

export default SingleReceipt