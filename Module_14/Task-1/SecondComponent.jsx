import React from 'react'

const SecondComponent = (props) => {
  return (
    <div>
      <h1>Props Example</h1>
      <hr />
      <h3>One Of My Other Friend's Name Is {props.myName}</h3>
      <h3>He Is {props.myAge}</h3>
      <br />
    </div>
  )
}

export default SecondComponent
