import { FcApprove } from "react-icons/fc";
import "./CreateTodoButton.css";
function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(true)}
        
    
    ><FcApprove />
      +
    </button>
  );
}

export { CreateTodoButton };
