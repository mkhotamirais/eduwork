import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";

const UserAction = ({ className }) => {
  return (
    <div
      className={`${className} rounded-md w-32 text-center bg-white z-50 border top-full mt-2 h-auto right-0 p-2 flex flex-col`}
    >
      <Link
        to="/account/profil"
        className="mb-3 font-semibold hover:text-slate-500"
      >
        My Account
      </Link>
      <Link to="/login">
        <Btn className={"p-2 w-full rounded"}>Login</Btn>
      </Link>
    </div>
  );
};
UserAction.propTypes;

export default UserAction;
