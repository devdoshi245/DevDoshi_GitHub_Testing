import React from 'react'
import useAPI from './useAPI';

const CustomHooks = () => {
    const [post] = useAPI("https://jsonplaceholder.typicode.com/posts");
    const [user] = useAPI("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      <table border={2}>
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        </thead>
        <tbody>
        {
            post.map((i)=>{
                return(
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>
                )
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default CustomHooks

