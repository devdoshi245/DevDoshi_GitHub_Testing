import React, { useMemo } from 'react'
import { useState } from 'react';

const Memo_Example = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const addCounter = ()=>{
        console.log("counter func called...");
        
        setCount(count+1);
    }

    const addNum = () =>{
        console.log("number func called...");
        
        setNum(num+10);
    }

    const smthng = (count) =>{
        console.log("smthng called...");
        for(let i=0;i<10000;i++)
        {
            count+=i;
        }
        return count;
    }
    const calc = useMemo(()=>{
        return smthng(count);
    },[count]);
  return (
    <div>
        <h3>Count is : {count}</h3>
        <button onClick={addCounter}>Add</button>
        
        <h3>Num is : {num}</h3>
        <button onClick={addNum}>Add</button>
    </div>
  )
}

export default Memo_Example
