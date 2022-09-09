import React from 'react'


const FigCaption = (props) => {
  return (
    <>
        <img style={{
            width: "100%"
          }} src={props.img} />
          <span style={{
                padding: "10px 20px",
                backgroundColor: "" + props.color + "",
                position: "absolute",
                bottom: "9px",
                right: "6px",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
                clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)",
            }} className="category">{props.category}</span>
    </>
  )
}

export default FigCaption