import React from 'react'

const CardShadow = (props) => {
  return (
    <div style={{
        width: "98%",
        height: "98%",
        position: "absolute",
        boxShadow: "0px 0px 6px 3px " + props.color + " inset, 0px 0px 10px 5px " + props.color
      }}></div>
  )
}

export default CardShadow