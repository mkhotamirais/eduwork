import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import LabelInput from "../../components/LabelInput";
import FlexCenter from "../../components/FlexCenter";

const Login = () => {
  return (
    <FlexCenter>
      <div className="border p-3 rounded-lg w-80">
        <h1 className="font-semibold text-2xl mb-3 text-center">Login</h1>
        <form action="">
          <LabelInput
            label="Email"
            classInput={"w-full"}
            placeholder={"email@gmail.com"}
          />
          <LabelInput
            label="Password"
            classInput={"w-full"}
            placeholder={"********"}
          />
          <Btn className={"w-full p-3 rounded"}>Login</Btn>
        </form>
        <p className="text-center mt-5">
          Do not have an account?{" "}
          <Link to="/register" className="font-semibold text-blue-500">
            Regsiter
          </Link>
        </p>
      </div>
    </FlexCenter>
  );
};

export default Login;
