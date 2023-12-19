import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Btn from "../../components/Btn";
import FlexCenter from "../../components/FlexCenter";
import LabelInput from "../../components/LabelInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUsers, usersSelectors } from "./authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const users = useSelector(usersSelectors.selectById);

  const dispatch = useDispatch();

  const isLoginFilled = Boolean(email) && Boolean(password);

  function handleLogin(e) {
    e.preventDefault();
    // dispatch(getUsers(email, password));
    // console.log(users);
  }
  useEffect(() => {
    // dispatch(getUsers(email, password));
    // console.log(users);
  }, []);
  return (
    <>
      <FlexCenter>
        <div className="relative shadow rounded-md bg-white p-3 w-full mx-3 sm:w-1/2 lg:w-1/4 ">
          <Link to="/" className="absolute top-3 left-3" title="back to homepage">
            <BiArrowBack className="text-xl hover:text-blue-500 cursor-pointer" />
          </Link>
          <h1 className="text-center font-semibold text-2xl my-3">Login</h1>
          <form onSubmit={handleLogin}>
            <LabelInput
              label="email"
              placeholder={"example@gmail.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabelInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              placeholder={"********"}
            />
            <Btn
              disabled={!isLoginFilled}
              type="submit"
              className={`rounded w-full py-3 font-medium ${!isLoginFilled ? "opacity-80" : ""}`}
            >
              Login
            </Btn>
          </form>
          <div className="text-center mt-5 mb-3">
            <p>
              Do not have an account?{" "}
              <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </FlexCenter>
    </>
  );
};

export default Login;
