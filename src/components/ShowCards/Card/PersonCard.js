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
        Email:{" "}
        <strong>
          <em>{props.person.email}</em>
        </strong>
      </p>
    </div>
  );
};

export default Card;
