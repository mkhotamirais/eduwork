import { NavLink, Outlet } from "react-router-dom";

const Child1Router = () => {
  return (
    <>
      <h1>Router Tingkat 3</h1>
      <ul>
        <li>
          <NavLink to="grandchild1">Link1</NavLink>
        </li>
        <li>
          <NavLink to="grandchild2">Link2</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Child1Router;
