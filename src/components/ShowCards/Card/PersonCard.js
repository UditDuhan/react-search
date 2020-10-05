import React from "react";
import classes from "./PersonCard.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.person.avatar} alt={props.person.first_name} />
      <p>
        Name:{" "}
        <strong>
          {props.person.first_name} {props.person.last_name}
        </strong>
      </p>
      <p>
        Email: <em>{props.person.email}</em>
      </p>
    </div>
  );
};

export default Card;
