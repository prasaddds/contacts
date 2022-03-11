import React from "react";
import Avatar from "./Avatar.js"
import Details from "./Detail";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p>{props.abc}</p>
      {/* we cannot get id value inside this file */}
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
      <Details
        detailInfo={props.tel}
      />
      <Details
        detailInfo={props.email}
      />
      </div>
    </div>
  );
}

export default Card;
