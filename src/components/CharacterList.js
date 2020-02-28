import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results);
      })
  }, []);

  return (
    <section className="character-list">
       {!data &&
      <p>...loading</p>
      } 
      {data && 
        data.map(item => {
          console.log(item)
          return <CharacterCard 
            key={item.timestamp}
            name={item.name}
            species={item.species}
          />
        })
      }
    </section>
  );
}
