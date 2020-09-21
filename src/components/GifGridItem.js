import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  //console.log(id, title, url); Es lo mismo que lo de abajo pero más bonito XD
  // console.log({ id, title, url });
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
    </div>
  );
};
