import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Btn from "../../components/Btn";
import FlexCenter from "../../components/FlexCenter";
import LabelInput from "../../components/LabelInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, usersSelectors } from "./authSlice";

const Register = () => {
  const dispatch = useDispatch();
  // const user = useSelector(usersSelectors.selectAll);
  useEffect(() => {
    // dispatch(getUsers());
    dispatch(register({ full_name: "jjj", email: "jjj@gmail.com", password: "jjj" }));
  }, [dispatch]);
  return (
    <>
      <FlexCenter>
        <div className="relative shadow rounded-md bg-white p-3 w-1/4">
          <Link to="/" className="absolute top-3 left-3" title="back to homepage">
            <BiArrowBack className="text-xl hover:text-blue-500 cursor-pointer" />
          </Link>
          <h1 className="text-center font-semibold text-2xl my-3">Register</h1>
          <form action="">
            <LabelInput label="username" placeholder={"your name"} />
            <LabelInput label="email" placeholder={"example@gmail.com"} />
            <LabelInput label="password" placeholder={"********"} />
            <LabelInput label="confirm password" placeholder={"********"} />
            <Btn className={"rounded w-full py-3 font-medium"}>Register</Btn>
          </form>
          <div className="text-center mt-5 mb-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </FlexCenter>
    </>
  );
};

export default Register;
