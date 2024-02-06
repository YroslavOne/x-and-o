import SelectPlayers from "./SelectPlayers";
import { useState } from "react";
import Game from "./Game";
import { SCREENS } from "./../Consist";

function Main() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.SELECT_PLAYERS);

  return (
    <div>
      <div>{currentScreen === SCREENS.GAME && <Game />}</div>
      {currentScreen === SCREENS.SELECT_PLAYERS && (
        <SelectPlayers
          setCurrentScreen={setCurrentScreen}
          currentScreen={currentScreen}
        />
      )}
    </div>
  );
}

export default Main;
