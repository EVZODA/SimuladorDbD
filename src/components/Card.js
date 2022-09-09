import React from 'react';
import FigCaption from './FigCaption.js';
import CardShadow from './CardShadow.js';
import Overlay from './Overlay.js';


const Card = (props) => {
  return (
    <figure style={{
        width: "250px",
        height: "250px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} className="dbd-card">
        <CardShadow color={props.color}></CardShadow>
        <FigCaption color={props.color} img={props.img} category={props.category}></FigCaption>
        <Overlay title={props.title} desc={props.desc}></Overlay>
        <div className="tl_cube"></div>
        <div className="br_cube"></div>
      </figure>
  )
}

export default Card