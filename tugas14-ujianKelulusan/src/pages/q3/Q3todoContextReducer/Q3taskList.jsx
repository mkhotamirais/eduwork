import { useState } from "react";
import { useDispatchTask, useTask } from "./Q3taskProvider";

const Q3taskList = () => {
  const tasks = useTask();
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Q3taskList;

const Task = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatchTask();

  const onDeleteTask = () => {
    dispatch({ type: "deleted", id: task.id });
  };

  const onUpdateTask = (e) => {
    dispatch({ type: "changed", task: { ...task, text: e.target.value } });
  };

  const onCheckedTask = (e) => {
    dispatch({ type: "changed", task: { ...task, done: e.target.checked } });
  };

  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input type="text" value={task.text} onChange={(e) => onUpdateTask(e)} className="border" />
        <button onClick={() => setIsEdit(false)} className="underline mx-2">
          save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEdit(true)} className="underline mx-2">
          edit
        </button>
        <button onClick={onDeleteTask} className="underline">
          delete
        </button>
      </>
    );
  }
  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={(e) => onCheckedTask(e)} />
      {taskContent}
    </li>
  );
};
Task.propTypes;
