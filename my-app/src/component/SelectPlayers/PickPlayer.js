import { Context } from '../Context';
import { useContext } from 'react';

import './pickPlayer.css';

function PickPlayer(props) {
  const {
    cellList,
    selectedFirst,
    setSelectedFirst,
    setWhoPlaysBot,
    botGoesFirst,
  } = useContext(Context);

  function selectFirst(value) {
    setSelectedFirst(value);
    props.setOpenGame(true);
    props.setOpenSelectPlayers(false);
    if (value === 'X') {
      setWhoPlaysBot('O');
    } else {
      setWhoPlaysBot('X');
      botGoesFirst(cellList);
    }
  }

  return (
    <div className="block-pick-player">
      <h3>pick player 1's mark</h3>
      <div className="choice-o-or-x">
        <button onClick={(e) => selectFirst('X')} className="button-choice-x">
          <a></a>
        </button>
        <button onClick={(e) => selectFirst('O')} className="button-choice-o">
          <a />
        </button>
      </div>
      <h4>remember: {selectedFirst} goes first</h4>
    </div>
  );
}

export default PickPlayer;
