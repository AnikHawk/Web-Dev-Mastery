import React from 'react';

function Card({id, name, email}) {
  const url = 'https://robohash.org/' + id + '?set=set2&size=200x200';
  return (
    <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
      <img src={url} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
}

export default Card;
