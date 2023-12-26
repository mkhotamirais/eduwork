import { NavLink, useNavigate } from "react-router-dom";
import { Button, H3 } from "../components/Tags";
import { FaUserAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaRightToBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getToken, logout } from "../features/authSlice";

export const AuthBtn = () => {
  const token = useSelector(getToken);
  return (
    <>
      {!token ? (
        <NavLink to="/login">
          <FaRightToBracket className="text-xl" />
        </NavLink>
      ) : null}
      {token ? (
        <NavLink to="/user" className={"relative"}>
          <div id="svgLayer" className="bg-transparent w-full h-full absolute"></div>
          <H3>
            <FaUserAlt className="user" />
          </H3>
        </NavLink>
      ) : null}
    </>
  );
};

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Button className={"bg-slate-500"} onClick={onLogout}>
      <LuLogOut className="" />
    </Button>
  );
};
