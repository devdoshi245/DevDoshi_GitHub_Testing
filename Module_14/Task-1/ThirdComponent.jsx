import React, {useState} from 'react'

const ThirdComponent = () =>{
    const [name,setName] = useState("Dev Doshi");
    const [age,setAge] = useState(21);
    const [count,setCount] = useState(0);

    const changeAge = () =>{
        setAge(1500);
    }

    return(
        <div>
            <h1>State Example</h1>
            <hr />
            <h3>Name is {name}</h3>
            <h3>Age is {age}</h3>
            <h3>Counter Is {count}</h3>
            <button onClick = {() => setCount(count+1)}>Count Badlo</button>
            <button onClick = {() => setName("Dago Doshi")}>Naam Badlo</button>
            <button onClick = {changeAge}>Age Badlo</button>
        </div>
    )
}

export default ThirdComponent