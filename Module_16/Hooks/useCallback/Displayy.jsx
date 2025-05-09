import React from 'react'
import { memo } from 'react';

const Displayy = ({data}) => {
    console.log("Display component called...");
    
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((i,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>
                    <button onClick={()=>editData(index)}>Edit</button>
                    <button onClick={()=>delData(index)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default memo(Displayy)

