import TaskControlSearch from "../components/TaskControlSearch";
import TaskControlSort from "../components/TaskControlSort";

function TaskControl(props) {
  return (
    <div className="row mt-15">
      <TaskControlSearch />
      <TaskControlSort />
    </div>
  );
}

export default TaskControl;
