import { Context } from '../../Context';
import { useContext } from 'react';
import DataCells from '../../../DataCells';
import { v4 as uuidv4 } from 'uuid';
import './playAgain.css';

function PlayAgain() {
  const { playAgain, setCellList } = useContext(Context);

  let cellList = [
    {
      id: 1,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 2,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 3,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 4,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 5,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 6,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 7,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 8,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
    {
      id: 9,
      value: null,
      filled: false,
      key: uuidv4(),
      background: 'rgb(31,53,64)',
    },
  ];

  function clickPlayAgain() {
    setCellList(cellList);
    playAgain(cellList);
  }

  return (
    <div className="play-again">
      <button
        className="button-play-again"
        onClick={(e) => {
          clickPlayAgain();
        }}
      ></button>
    </div>
  );
}
export default PlayAgain;
