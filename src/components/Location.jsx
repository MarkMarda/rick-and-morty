import React from 'react';

const Location = ({getLocation}) => {
  return (
    <article>
      <p>{getLocation?.name}</p>
      <p>Type: {getLocation?.type}</p>
      <p>Dimension: {getLocation?.dimension}</p>
      <p>Population: {getLocation?.residents.length}</p>
    </article>
  )
}

export default Location