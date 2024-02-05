import { Context } from '../../Context';
import { useContext } from 'react';
import DataCells from '../../../DataCells';
import { v4 as uuidv4 } from 'uuid';
import './playAgain.css';

function PlayAgain() {
  const { playAgain, setCellList } = useContext(Context);

  const cellList = Array.from(DataCells)

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
