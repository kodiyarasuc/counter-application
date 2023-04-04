import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Counter.css'
const Counter = () => {
let InitialCount=0;
    const[count,setCount]=useState(InitialCount);
    const[color,setColor]=useState('green')

    let Decrement=()=>{
      setCount(count -1)
      setColor('red')
    };

    let Increment=()=>{
      setCount(count+1)
      setColor('green')
    }
    let Reset=()=>{
      setCount(InitialCount);
      setColor('tomato')
    }
  return (
    <>
    <div className='Counter_header header bg-white text-secondary'>
        <h1>Counter Application</h1>
    </div>
    <div className='Counter_content'>
         <h3 className='count'>Count = <strong className='count_number'  style={{color}}>{count}</strong></h3>
          <div className='Counter_Btn'>
      <button className='btn btn-danger' onClick={Decrement}>Decrement</button>
      <button className='btn btn-primary' onClick={Increment}>Increment</button>
      <button className='btn btn-warning' onClick={Reset}>Reset</button>
    </div>
    </div>
   
    </>
  )
}

export default Counter