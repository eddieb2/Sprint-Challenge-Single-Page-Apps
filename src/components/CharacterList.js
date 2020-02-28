import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState();
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);

  return (
      <section className="character-list">
        <SearchForm
          setQuery={setQuery}
        />
        {!data &&
        <p>...loading</p>
        } 
        {data && 
          data.map((item, index) => {
            {/* console.log(item) */}
            return <CharacterCard 
              key={index}
              name={item.name}
              species={item.species}
            />
          })
        }
      </section>
  );
}
