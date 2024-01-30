import { useContext, useState } from 'react';
import PickPlayer from './SelectPlayers/PickPlayer';
import { Context } from './Context';
import './selectPlayers.css';
// import Logo from "./../../public/image/logo.svg"

function SelectPlayers(props) {
  const { setPlayerVs } = useContext(Context);
  const [openPickPlayer, setOpenPickPlayer] = useState(false);

  function chooseWithWhom(value, openedOpenPickPlayer) {
    if (openedOpenPickPlayer === true) {
      setOpenPickPlayer(openedOpenPickPlayer);
    } else {
      setPlayerVs(value);
      props.setOpenGame(!openedOpenPickPlayer);
      props.setOpenSelectPlayers(openedOpenPickPlayer);
    }
  }

  return (
    <div>
      <div className="container-logo">
        <div className="logo"></div>
      </div>
      {openPickPlayer && (
        <PickPlayer
          setOpenGame={props.setOpenGame}
          setOpenSelectPlayers={props.setOpenSelectPlayers}
        />
      )}
      <div className="block-cpu-or-player">
        <button
          onClick={(e) => chooseWithWhom(e.target.value, true)}
          value={'cpu'}
          className="button-cpu-or-player"
        >
          New Game (Vs CPU)
        </button>
        <button
          onClick={(e) => chooseWithWhom(e.target.value, false)}
          value={'player'}
          className="button-cpu-or-player"
        >
          New Game (Vs Player)
        </button>
      </div>
    </div>
  );
}
export default SelectPlayers;
