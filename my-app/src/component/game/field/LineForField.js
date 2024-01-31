import { useContext } from 'react';
import { Context } from '../../Context';
import './lineForField.css';

function LineForField(props) {
  const { tapOnCell } = useContext(Context);

  // console.log(cell)
  function tap(id) {
    tapOnCell(id);
  }
  return (
    <li
      className={`call ${props.value}`}
      id={props.id}
      onClick={(e) => tap(e.target.id)}
      style = {{backgroundColor: props.background}}
    >

    </li>
  );
}
export default LineForField;
