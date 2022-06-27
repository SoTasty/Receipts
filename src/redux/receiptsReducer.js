import { LIKES_INCREMENT, SET_RECS } from "./types"

const initialState = {
    items: [
        { id: 1, title: "title 1", likes: 10}, 
        { id: 2, title: "title 2", likes: 16}, 
        { id: 3, title: "title 3", likes: 18}, 
        { id: 4, title: "title 4", likes: 51}, 
        { id: 5, title: "title 5", likes: 94}, 
        { id: 6, title: "title 6", likes: 20}, 
        { id: 7, title: "title 7", likes: 16}, 
        { id: 8, title: "title 8", likes: 12}
    ]
}

export const receiptsReducer = (state = initialState, action) => {
    console.log('receiptsReducer >>>', action)
    
    switch(action.type) {

        case LIKES_INCREMENT: 
        return(() => {
            const { id } = action
            const { items } = state
            const itemIndex = items.findIndex(res => res.id === id)

            const nextReceipts = [
                ...items.slice(0, itemIndex),
                
                ...items.slice(itemIndex +1)
            ]

            return {
                ...state,
                receipts: nextReceipts
            }
        
        })()
        case SET_RECS: 
            return {
                ...state,
                items: action.payload.results
            }
         default: 
            return state
    }
}
