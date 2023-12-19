import { Link } from "react-router-dom";
import Btn from "../../components/Btn";

const AuthBox = ({ className }) => {
  return (
    <div className={`${className} border absolute right-3 font-bold p-2`}>
      <Link to="/login">
        <Btn>Login</Btn>
      </Link>
    </div>
  );
};
AuthBox.propTypes;

export default AuthBox;
