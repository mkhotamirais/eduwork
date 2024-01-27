import { useReducer } from "react";
import { H2 } from "../../components/Tags";

const createInitialState = (username = "ahmad") => {
  const initialTodos = [];
  for (let i = 0; i < 3; i++) {
    initialTodos.push({ id: i, text: `${username} ${i}` });
  }
  return {
    draft: "",
    todos: initialTodos,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changed_draft": {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        draft: "",
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};

const Q3useReducerInitialState = ({ username }) => {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);

  const handleChange = (e) => {
    dispatch({
      type: "changed_draft",
      nextDraft: e.target.value,
    });
  };

  const handleAdd = () => {
    dispatch({ type: "added_todo" });
  };

  return (
    <div>
      <H2>Q3useReducerInitialState</H2>
      <input type="text" value={state.draft} onChange={(e) => handleChange(e)} className="border" />
      <button onClick={handleAdd} className="underline">
        add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
Q3useReducerInitialState.propTypes;

export default Q3useReducerInitialState;
