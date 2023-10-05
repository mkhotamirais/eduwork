import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LabelInput from "../../components/LabelInput";

const Register = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="border bg-white rounded-lg p-5 w-1/4">
        <h1 className="text-2xl text-center font-semibold">Register</h1>
        <form>
          <LabelInput id="name" placeholder="your name" label="Name" />
          <LabelInput
            id="email"
            type="email"
            placeholder="email@gmail.com"
            label="Email"
          />
          <LabelInput
            id="password"
            type="password"
            placeholder="********"
            label="Password"
          />
          <LabelInput
            id="password2"
            type="password"
            placeholder="********"
            label="Confirm Password"
          />
          <Button className="w-full py-3">Login</Button>
        </form>
        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
