import { useContext } from 'react';
import { Context } from '../../Context';
import './lineForField.css';

function LineForField(props) {
  const { tapOnCell } = useContext(Context);

  function tap(id) {
    tapOnCell(id);
  }
  return (
    <li
      className={`call ${props.value}`}
      id={props.id}
      key={props.id}
      onClick={(e) => tap(e.target.id)}
      style={{ backgroundColor: props.background }}
    ></li>
  );
}
export default LineForField;
