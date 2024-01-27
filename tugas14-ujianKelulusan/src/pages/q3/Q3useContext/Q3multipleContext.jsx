import { createContext, useContext, useState } from "react";
import { H2 } from "../../../components/Tags";

const ThemeContext = createContext(null);
const UserContext = createContext(null);

const Q3multipleContext = () => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("ahmad");
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <H2>multiple context</H2>
        <section className={`${theme === "dark" ? "bg-black text-slate-500" : "bg-white text-black"} p-3 rounded border`}>
          <Q3ChangeUser />
          <p>user is : {user}</p>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />{" "}
            use dark theme
          </label>
        </section>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Q3multipleContext;

const Q3ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  return <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="border"></input>;
};
