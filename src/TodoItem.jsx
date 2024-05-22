import { FcInspection } from "react-icons/fc";
import { RiDeleteBin2Line } from "react-icons/ri";

import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FcInspection />
      </span>
      <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className={" Icon Icon-delete"} onClick={props.onDelete}>
        <RiDeleteBin2Line />
      </span>
    </li>
  );
}
export { TodoItem };
