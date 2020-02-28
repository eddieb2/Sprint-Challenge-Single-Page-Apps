import React from "react";

export default function CharacterCard(props) {
  return(
    <ul>
      <li>{props.name}</li>
      <li>{props.species}</li>
    </ul>
  ) ;
}
