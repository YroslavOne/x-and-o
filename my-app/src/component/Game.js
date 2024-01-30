import NextMove from './game/field/NextMove';
import Field from './game/Field';
import PlayAgain from './game/field/PlayAgain';
import Score from './game/field/Score';
import "./game.css"

function Game() {
  return (
    <div className='block-game'>
        <div className='block-game-head'>
            <div className='block-game-head-logo'></div>
<NextMove />
      <PlayAgain />
    </div>
      
      <Field />
      
      <Score />
    </div>
  );
}
export default Game;
