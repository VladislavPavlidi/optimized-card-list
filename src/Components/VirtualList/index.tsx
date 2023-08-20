import React from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import Card from './Card';

const columnWidths = new Array(150)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

export default function VirtualList() {
  return (
    <Grid
      className="cards"
      columnCount={3}
      columnWidth={(index) => 200}
      height={1300}
      width={1300}
      rowCount={30}
      rowHeight={(index) => 200}
    >
      {Card}
    </Grid>
  );
}
