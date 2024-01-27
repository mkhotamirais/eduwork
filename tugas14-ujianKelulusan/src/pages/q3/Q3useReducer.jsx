import { useReducer } from "react";
import { H2 } from "../../components/Tags";

const reducer = (state, action) => {
  switch (action.type) {
    case "incremented_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "change_name": {
      return {
        ...state,
        name: action.anotherName,
      };
    }
  }
  throw Error("Unknown action");
};

const Q3useReducer = () => {
  const [state, dispatch] = useReducer(reducer, { name: "ahmad", age: 42 });

  const handleClick = () => {
    dispatch({ type: "incremented_age" });
  };

  const handleChangeName = () => {
    dispatch({ type: "change_name", anotherName: "siti" });
  };
  return (
    <>
      <H2>Q3useReducer</H2>
      <ul className="list-inside list-disc">
        <li>
          <span>
            your name: {state.name}; your age: {state.age}
          </span>
        </li>
        <li>
          <button onClick={handleClick} className="underline">
            inc age
          </button>{" "}
          |{" "}
          <button onClick={handleChangeName} className="underline">
            change name
          </button>
        </li>
      </ul>
    </>
  );
};

export default Q3useReducer;
