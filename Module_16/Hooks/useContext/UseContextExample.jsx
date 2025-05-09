import React, { createContext, useCallback, useContext } from 'react'
import { useState } from 'react';
let userData = createContext();

const UseContextExample = () => {
    const [name, setName] = useState("Testing");
  return (
    <div>
        <h3>First Component called...</h3>
      <h3>Name is --- {name}</h3>
      <userData.Provider value={name}>
      <Component2/>
      </userData.Provider>
    </div>
  )
}

const Component2 = () =>{
    return(
        <div>
            <h3>Second Component called...</h3>
            <Component3/>
        </div>
    )
}

const Component3 = () =>{
    return(
        <div>
            <h3>Third Component called...</h3>
            <Component4/>
        </div>
    )
}

const Component4 = () =>{
    let name = useContext(userData);
    return(
        <div>
            <h3>Fourth & Final Component called...</h3>
            <h3>Final name is --- {name}</h3>
        </div>
    )
}

export default UseContextExample
