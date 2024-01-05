import { NavLink, Outlet } from "react-router-dom";
import { H1 } from "../components/Tags";
import { Logout } from "./AuthBtn";
import { useSelector } from "react-redux";
import { getError, getStatus } from "../features/productsSlice";

const UsersLayout = () => {
  const error = useSelector(getError);
  const status = useSelector(getStatus);
  return (
    <section id="users">
      <H1 className={""}>User Account</H1>
      <nav className="bg-white rounded p-2 flex justify-between items-center">
        <div>
          <NavLink to="">Profil</NavLink>
          <NavLink to="order">Order</NavLink>
          <NavLink to="address">Address</NavLink>
        </div>
        <Logout />
      </nav>
      <div>
        {error ? (
          <p className="text-rose-500 text-center my-2">
            <i>{error}</i>
          </p>
        ) : null}{" "}
        {status === "loading" ? <p className="text-center my-2">Loading data...</p> : null}
        {!error && status === "succeeded" ? <Outlet /> : null}
      </div>
    </section>
  );
};

export default UsersLayout;
