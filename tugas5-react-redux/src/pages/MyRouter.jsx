import { NavLink, Outlet } from "react-router-dom";

const MyRouter = () => {
  return (
    <>
      <h1>Router tingkat 2</h1>
      <ul>
        <li>
          <NavLink to="child1">Link1</NavLink>
        </li>
        <li>
          <NavLink to="child2">Link2</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MyRouter;
