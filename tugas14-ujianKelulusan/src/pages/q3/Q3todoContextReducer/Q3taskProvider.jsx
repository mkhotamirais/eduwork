import { createContext, useContext, useReducer } from "react";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const Q3taskProvider = ({ children }) => {
  const [task, dispatch] = useReducer(taskReducer, initialTask);
  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};
Q3taskProvider.propTypes;

export default Q3taskProvider;

export const useTask = () => useContext(TaskContext);
export const useDispatchTask = () => useContext(TaskDispatchContext);

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [{ id: action.id, text: action.text, done: false }, ...tasks];
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

const initialTask = [
  { id: 0, text: "task1", done: true },
  { id: 1, text: "task2", done: false },
  { id: 2, text: "task3", done: false },
];
