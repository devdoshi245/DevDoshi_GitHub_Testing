import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiExample = () => {

    let [data,setData]=useState({
        name:'',
        age:''
    })
    let [alldata,setAlldata]=useState([])
    const [id,setId] = useState('')
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>setAlldata(res.data))
    })
    let handleChange=(e)=>{
        let nam=e.target.name
        let val=e.target.value

        setData({
            ...data,
            [nam]:val
        })
    }
    let saveData=(e)=>{
        e.preventDefault()
        // setAlldata([
        //     ...alldata,
        //     data
        // ])
        if(id!=''){
            axios.put("http://localhost:3000/users/"+id,data)

        } else {
            axios.post("http://localhost:3000/users",data)
        }

    }
    let delData=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        // let res = alldata.filter((i,index)=>{
        //     return index != id
        // })
        // setAlldata(res)
    }
    let editData =(id)=>{
        axios.patch("http://localhost:3000/users/"+id)
            .then((res)=>setData(res.data))
        setId(id)
        // let res = alldata.find((i,index)=>{
        //     return index == id
        // })
        // setData(res)
    }
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:- </label>
        <input type="text" name='name' id='name' placeholder='Name' value={data.name}  onChange={handleChange}/><br></br>

        <label htmlFor="">Age:- </label>
        <input type="number" name='age' id='age' placeholder='Age' value={data.age} onChange={handleChange} /><br></br>

        <input type="submit" value="Save" />
      </form>
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
                alldata.map((i,index)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={()=>editData(i.id)}>Edit</button>
                                <button onClick={()=>delData(i.id)}>Delete</button>
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

export default ApiExample
