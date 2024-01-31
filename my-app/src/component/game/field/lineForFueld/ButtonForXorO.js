import { v4 as uuidv4 } from 'uuid';

function ButtonForXorO(id, cellList, nextOorX, setNextOorX, newGame, playerVs) {
  function chekPlayer(valueOorX) {
    if (playerVs === 'player') {
      let valueXandO;
      if (valueOorX === 'X') {
        valueXandO = 'O';
        setNextOorX(valueXandO);
      } else {
        valueXandO = 'X';
        setNextOorX(valueXandO);
      }
    }
  }

  let clickedOnAnEmpty = false;
  let allCell = [];
  if (newGame === true) {
    cellList.map((objAllCell) => {
      if (objAllCell.id === Number(id)) {
        if (objAllCell.value === 'X' || objAllCell.value === 'O') {
          allCell.push(objAllCell);
          clickedOnAnEmpty = true;
          alert(
            `"I can’t set the court value, it’s already" ${objAllCell.value}`
          );
        } else {
          chekPlayer(nextOorX);
          allCell.push({
            id: objAllCell.id,
            value: nextOorX,
            filled: true,
            background: 'rgb(31,53,64)',
            key: uuidv4(),
          });
        }
      } else {
        allCell.push(objAllCell);
      }
    });
  } else {
    allCell = cellList;
  }
  if (clickedOnAnEmpty === true) {
    allCell = null;
  }
  return allCell;
}
export default ButtonForXorO;
