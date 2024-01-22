import React, { useState } from 'react';
import ButtonForXorO from './field/lineForFueld.js/ButtonForXorO';
// import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext({
  cell: null,
  setCell: () => {},
  nextOorX: 'X',
  setNextOorX: () => {},
});

export const ContextProvider = ({ children }) => {
  let valueCell = [
    {
      id: 1,
      value: null,
    },
    {
      id: 2,
      value: null,
    },
    {
      id: 3,
      value: null,
    },
    {
      id: 4,
      value: null,
    },
    {
      id: 5,
      value: null,
    },
    {
      id: 6,
      value: null,
    },
    {
      id: 7,
      value: null,
    },
    {
      id: 8,
      value: null,
    },
    {
      id: 9,
      value: null,
    },
  ];
  if (localStorage?.Cell) {
  } else {
    localStorage.Cell = JSON.stringify(valueCell);
  }
  if (localStorage?.NextOorX) {
  } else {
    localStorage.setItem('NextOorX', 'X');
  }

  const [cell, setCell] = useState(valueCell);
  const [nextOorX, setNextOorX] = useState('X');

  function tapOnCell(id) {
    localStorage.Cell = JSON.stringify(
      ButtonForXorO(id, cell, nextOorX, setNextOorX)
    );
    setCell(JSON.parse(localStorage.Cell));
    // console.log(cell)
  }

  localStorage.setItem('NextOorX', nextOorX);

  return (
    <Context.Provider
      value={{
        cell,
        setCell,
        nextOorX,
        setNextOorX,
        tapOnCell,
      }}
    >
      {children}
    </Context.Provider>
  );
};
