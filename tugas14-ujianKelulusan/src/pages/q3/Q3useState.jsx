import { useState } from "react";
import { Button } from "../../components/Tags";

const Q3useState = () => {
  const [count, setCount] = useState(0);

  const minus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>Q3useState</h1>
      <p>{count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>plus</Button>
      <Button disabled={!count > 0} onClick={minus}>
        minus
      </Button>
    </div>
  );
};

export default Q3useState;
