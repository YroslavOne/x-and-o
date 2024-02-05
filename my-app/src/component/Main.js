import SelectPlayers from "./SelectPlayers";
import { useState } from "react";
import Game from "./Game";

const SCREENS = { GAME, SELECT_PLAYERS };

function Main() {
  // const [openGame, setOpenGame] = useState(false);
  // const [openSelectPlayers, setOpenSelectPlayers] = useState(true);
  const [currentScreen, setCurrentScreen] = useState(SCREENS.SELECT_PLAYERS);

  return (
    <div>
      <div>{currentScreen === SCREENS.GAME && <Game />}</div>
      {currentScreen === SCREENS.SELECT_PLAYERS && (
        <SelectPlayers
          setCurrentScreen={setCurrentScreen}
          currentScreen={currentScreen}
          SCREENS = {SCREENS}
          // setOpenGame={setOpenGame}
          // setOpenSelectPlayers={setOpenSelectPlayers}
        />
      )}
    </div>
  );
}

export default Main;
