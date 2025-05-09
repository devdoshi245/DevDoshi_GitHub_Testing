import React from 'react'

const SecondComponent = () => {
    const internal = {
        color:"pink",
        backgroundColor:"cadetblue"
    }
  return (
    <div>
      <h3 style={internal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi veritatis nulla voluptatum saepe quibusdam doloribus neque beatae reprehenderit earum sunt repellat quasi nesciunt facilis illo, repudiandae alias explicabo sed!</h3>
    </div>
  )
}

export default SecondComponent
