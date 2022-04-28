
import React from 'react'
import './App.css'
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from './components/Action' 

function App() {
  const myState=useSelector((state)=>state.changeNumber)
  const dispatch=useDispatch();

  return (
    <>
   
   <div className="container text-center">
     <h3>increment decrement number</h3>
     <h4>using react redux</h4>
     <div className="quantity mt-3">
     <p className='increment' onClick={()=>dispatch(incNumber())}>+</p>
     <p className='num'>{myState}</p>
     <p className='decrement' onClick={()=>dispatch(decNumber())}>-</p>
     </div>
   </div>
    </>
  )
}

export default App