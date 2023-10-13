import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import LabelInput from "../../components/LabelInput";
import FlexCenter from "../../components/FlexCenter";

const Register = () => {
  return (
    <FlexCenter>
      <div className="border p-3 rounded-lg w-80">
        <h1 className="font-semibold text-2xl mb-3 text-center">Register</h1>
        <form action="">
          <LabelInput label="Name" classInput={"w-full"} placeholder={"name"} />
          <LabelInput
            label="Email"
            classInput={"w-full"}
            placeholder={"email@gmail.com"}
          />
          <LabelInput
            label="Password"
            classLabel={"block"}
            classInput={"w-full"}
            placeholder={"********"}
          />
          <LabelInput
            label="Confirm Password"
            classLabel={"block"}
            classInput={"w-full"}
            placeholder={"********"}
          />
          <Btn className={"w-full p-3 rounded"}>Register</Btn>
        </form>
        <p className="text-center mt-5">
          Already have an accoount?{" "}
          <Link to="/login" className="font-semibold text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </FlexCenter>
  );
};

export default Register;
