import { useReducer, useState } from "react";
import { H2 } from "../../components/Tags";

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

const initialTasks = [
  { id: 1, text: "task1", done: false },
  { id: 2, text: "task2", done: true },
  { id: 3, text: "task3", done: false },
];

const Q3useReducerTodo = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState("");
  const [idEdit, setIdEdit] = useState(null);

  const onAddTask = () => {
    const maxId = tasks.reduce((a, b) => (a = a > b.id ? a : b.id), 0);
    dispatch({ type: "added", id: maxId + 1, text });
    setText("");
  };

  const onDeleteTask = (id) => {
    dispatch({ type: "deleted", id });
  };

  const onSaveEdit = (task) => {
    dispatch({ type: "changed", task });
  };
  return (
    <>
      <H2>useReducer todo list</H2>
      <input type="text" className="border rounded" value={text} onChange={(e) => setText(e.target.value)} />
      <button disabled={!text} onClick={onAddTask} className="underline">
        add task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" />
            {idEdit === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => {
                  onSaveEdit({ ...task, text: e.target.value });
                }}
                className="border rounded"
              />
            ) : (
              <span>{task.text}</span>
            )}
            {idEdit !== task.id && (
              <button onClick={() => onDeleteTask(task.id)} className="underline">
                delete
              </button>
            )}
            {idEdit === task.id ? (
              <button type="button" onClick={() => setIdEdit(!idEdit)} className="underline">
                save
              </button>
            ) : (
              <button type="button" onClick={() => setIdEdit(task.id)} className="underline">
                edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Q3useReducerTodo;
