import Description from 'Components/UI/Description';
import Title from 'Components/UI/Title';
import React from 'react';

export default function Card() {
  return (
    <article className="card">
      <div className="card__image-holder">
        <img
          src="https://www.sciencenews.org/wp-content/uploads/2022/11/Hubble-Pillars-of-Creation.jpg"
          alt="card"
        />
      </div>
      <Title>Guy Hawkins</Title>
      <Description>Im good guy and i wanna tell u something</Description>
    </article>
  );
}
