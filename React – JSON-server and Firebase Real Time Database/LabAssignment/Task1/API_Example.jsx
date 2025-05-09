import React, { useEffect, useState } from 'react'

const API_Example = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(ab => setData(ab));
    },[])
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>product</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((i)=>{
                        return(
                            <tr>
                                <td>{i.id}</td>
                                <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                                <td>{i.title}</td>
                                <td>{i.category}</td>
                                <td>{i.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default API_Example
