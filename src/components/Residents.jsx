import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Residents = ({url}) => {
  const character = useFetch(url);
  console.log(character)

  return (
    <article className='character'>
      <header>
        <img src={character?.image} alt={`Image of ${character?.name}`} />
        <div>
          <div className='circle'></div>
          <p>{character?.status}</p>
        </div>
      </header>
      <div>
        <h2>Name: {character?.name}</h2>
        <p>Gender: {character?.gender}</p>
        <p>Origin: {character?.origin.name}</p>
        <p>Species: {character?.species}</p>
        <p>Type: {character?.type}</p>
        <p>Episodes where appears: {character?.episode.length}</p>
      </div>
    </article>
  )
}

export default Residents