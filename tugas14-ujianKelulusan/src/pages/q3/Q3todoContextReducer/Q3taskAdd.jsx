import { useState } from "react";
import { useDispatchTask, useTask } from "./Q3taskProvider";

const Q3taskAdd = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatchTask();
  const tasks = useTask();

  const onAddTask = () => {
    const maxId = tasks.reduce((a, b) => (a = a > b.id ? a : b.id), 0);
    dispatch({ type: "added", id: maxId + 1, text });
  };
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border" />
      <button onClick={onAddTask} className="underline px-2">
        add
      </button>
    </>
  );
};

export default Q3taskAdd;
