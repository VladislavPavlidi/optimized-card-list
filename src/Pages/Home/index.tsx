import React from 'react';
import Section from 'Components/UI/Section';
import VirtualList from 'Components/VirtualList';

// const data = [
//   { title: 'Title',
//     description: 'Description',
//     image:
//   }
// ]
// const columnWidths = new Array(1000)
//   .fill(true)
//   .map(() => 75 + Math.round(Math.random() * 50));
// const rowHeights = new Array(1000)
//   .fill(true)
//   .map(() => 25 + Math.round(Math.random() * 50));

export default function Home() {
  return (
    <Section>
      <VirtualList />
    </Section>
  );
}
