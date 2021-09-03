import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span>{props.id}</span>
        <span className="emoji" role="img" aria-label="Green Apple">
          {props.emoji}
        </span>
        <span className="title">{props.name}</span>
      </dt>
      <dd>
        <span className="meaning">{props.description}</span>
      </dd>
    </div>
  );
}

export default Entry;
