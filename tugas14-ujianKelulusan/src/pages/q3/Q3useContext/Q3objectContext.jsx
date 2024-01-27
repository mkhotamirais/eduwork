import { createContext, useContext, useState } from "react";
import { H2 } from "../../../components/Tags";

const UserContext = createContext(null);

const Q3objectContext = () => {
  const [user, setUser] = useState("ahmad");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <H2>Object context</H2>
      <Q3form />
      <p>The user is : {user}</p>
    </UserContext.Provider>
  );
};

export default Q3objectContext;

const Q3form = () => {
  const { user, setUser } = useContext(UserContext);
  return <input type="text" placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} className="border" />;
};
