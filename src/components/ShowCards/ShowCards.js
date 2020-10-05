import React from "react";
// import classes from "./ShowCards.module.css";
import PersonCard from "./Card/PersonCard";

const ShowCards = (props) => {
  return props.persons.map((person) => {
    return <PersonCard key={person.id} person={person} />;
  });
};

export default ShowCards;
