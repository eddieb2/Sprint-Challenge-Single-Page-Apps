import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CharacterCardStyles = styled.div `
  border: 1px solid black;
  margin: 5% 25% 5% 25%;
  list-style: none;
  text-align: center;
  background: lightgray;
`

export default function CharacterCard(props) {
  return(
    <Link to='/characters'>
      <CharacterCardStyles>
        <li>{props.name}</li>
        <li>{props.species}</li>
      </CharacterCardStyles>
    </Link>
  ) ;
}
