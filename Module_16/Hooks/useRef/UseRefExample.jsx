import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    let a = useRef(10);
    const addCounter = ()=>{
        setCount(count+1);
        a.current = a.current+1;
        console.log(a);
    }
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={addCounter}>Add Counter</button>
      <h3>A is --- {a.current}</h3>
    </div>
  )
}

export default UseRefExample
