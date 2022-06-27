import './App.css';
import Likes from './Likes';
import store from './redux/store';
import Title from './Title';
import Comments from './Comments'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SingleReceipt from './SingleReceipt';
import { BrowserRouter } from 'react-router-dom';
import { getReceipts } from './redux/actions';



function App() {




  const receipts = useSelector(state => {
    const { receiptsReducer } = state
    return receiptsReducer.items
})

console.log(receipts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReceipts())
    console.log(receipts)
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrap">
        {!!receipts.length && receipts.map(res => {
                  return <SingleReceipt key={res.id} data={res} />
              } )}
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
