import store from "../app/store";
import Counter from "./ReduxMateri/Counter";
import { Provider } from "react-redux";

const MyRedux = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default MyRedux;
