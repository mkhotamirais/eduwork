import { createContext, useContext, useState } from "react";
import { H2 } from "../../../components/Tags";

const ThemeContext = createContext(null);

const Q3homeContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <H2>use context basic</H2>
      <Q3form />
      <label>
        <input type="checkbox" checked={theme === "dark"} onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} />
        use dark mode
      </label>
      <p>theme: {theme}</p>
    </ThemeContext.Provider>
  );
};

export default Q3homeContext;

const Q3form = () => {
  return (
    <Q3panel title="welcome">
      <Q3button>Sign up</Q3button>
      <Q3button>Log in</Q3button>
    </Q3panel>
  );
};

const Q3panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <section className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} p-2 rounded border`}>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};
Q3panel.propTypes;

const Q3button = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <button className={`${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} mr-2 p-1 rounded`}>
      {children}
    </button>
  );
};
Q3button.propTypes;
