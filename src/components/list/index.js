import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Container } from './styles';


import Card from '../card'

export default function list({ data, index:listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
      </header>
      <br />
      <ul >
        {data.cards.map((card, index) =>
         <Card key={card.id}
         listIndex={listIndex}
          index={index} 
          data={card} />)}
      </ul>
    </Container>
  );
}
