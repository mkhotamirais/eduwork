import { useEffect, useState } from "react";
import { H2 } from "../../components/Tags";

const Q3useEffect = () => {
  const [second, setSecond] = useState(0);
  const [name, setName] = useState("ahmad");
  const [user, setUser] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data.name));
  }, []);

  return (
    <div>
      <H2>Q3useEffect</H2>
      <ul className="list-inside list-disc">
        <li>timer second: {second}</li>
        <li>
          localStorage: <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border" />
        </li>
        <li>http request: {user}</li>
      </ul>
    </div>
  );
};

export default Q3useEffect;
