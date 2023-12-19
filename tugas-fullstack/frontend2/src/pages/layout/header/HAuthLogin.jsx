import { AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const HAuthLogin = () => {
  return (
    <>
      {/* <NavLink to="/login">
          <AiOutlineUser />
        </NavLink> */}
      <NavLink to="login" title="login">
        <AiOutlineLogin />
      </NavLink>
    </>
  );
};

export default HAuthLogin;
