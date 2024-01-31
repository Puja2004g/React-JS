import React from "react";

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt={props.name} />;
}

export default Avatar;
