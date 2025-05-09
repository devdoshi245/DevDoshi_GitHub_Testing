import React, { useState } from 'react'

const First = () => {
    const [data,setData] = useState({
        uname:'',
        age:""
    })
    const [id,setId] = useState('')
    const [alldata,setAlldata]= useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        // setAlldata([
        //     ...alldata,
        //     data
        // ])
        axios.post("http://localhost:3000/users",data)
    }
    const delData = (id)=>{
        let res = alldata.filter((i,index)=>{
                return index != id
        })
        setAlldata(res)
    }
    const editData = (id)=>{
        let res = alldata.find((i,index)=>{
            return index == id
        })
        setData(res)
        setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
        <input type="text" name="uname" id="uname" value={data.uname} onChange={handleChange}/><br /><br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/><br /><br />
        <input type="submit" value='Save'/><br /><br />        
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.uname}</td>
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

export default First
