import React from 'react'

const Overlay = (props) => {
    return (
        <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            padding: "20px",
            top: "0px",
            backgroundColor: "black",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
          }} className="overlay">

            <h3 style={{
              color: "white",
              textTransform: "uppercase",
            }}>{props.title}</h3>

            <p style={{
              color: "white"
            }} className="desc">{props.desc}</p>

        </div>
    )
};

export default Overlay;