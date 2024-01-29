import NextMove from './game/field/NextMove';
import Field from './game/Field';
import PlayAgain from './game/field/PlayAgain';
import Score from './game/field/Score';

function Game() {
  return (
    <div>
      <NextMove />
      <Field />
      <PlayAgain />
      <Score />
    </div>
  );
}
export default Game;
