import { H2 } from "../../../components/Tags";
import Q3taskAdd from "./Q3taskAdd";
import Q3taskList from "./Q3taskList";
import Q3taskProvider from "./Q3taskProvider";

const Q3taskHome = () => {
  return (
    <Q3taskProvider>
      <H2>Q3taskHome useContext useReducer</H2>
      <Q3taskAdd />
      <Q3taskList />
    </Q3taskProvider>
  );
};

export default Q3taskHome;
