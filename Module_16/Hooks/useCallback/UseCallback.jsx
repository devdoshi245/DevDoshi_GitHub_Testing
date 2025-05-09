import React, { useCallback } from 'react'
import { useState } from 'react';
import Displayy from './Displayy';

const UseCallback = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState([]);
    const [id, setId] = useState('');

    const saveData = useCallback((e) =>{
        e.preventDefault();
          setData([
            ...data,
            {
              "name" : name,
              "age" : age
            }
          ]);
        })
        
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name: </label>
        <input type="text" name="uname" id="uname" style={{height:30, width:300}} value={name} onChange={(e)=>setName(e.target.value)}/>

        <br /><br />
        
        <label htmlFor="">Age: </label>
        <input type="number" name="age" id="age" style={{height:30, width:300}} value={age} onChange={(e)=>setAge(e.target.value)}/>
        
        <br /><br />

        <button type='submit'>Save</button>
      </form>
      <br /><br />
      <Displayy data={data}/>
    </div>
  )
}

export default UseCallback
