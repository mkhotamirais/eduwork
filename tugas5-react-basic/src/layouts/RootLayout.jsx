import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <header>
        <NavLink to="" className={"logo"} aria-current>
          tugas reactjs mkhotami
        </NavLink>
        <ul className="nav">
          <li className="nav-list">
            <NavLink to="basicComponents">basic components</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="stylingComponents">styling components</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="portfolioTask">portfolio task</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="formValidation">form validation</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="lifecycleComponents">lifecycle components</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default RootLayout;
