import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import RegisterForm from "./auth/RegisterForm";
const Register = () => {
  return (
    <section className="min-h-screen w-full bg-slate-100 flex items-center justify-center">
      <div className="relative border bg-white p-3 w-full mx-3 sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg">
        <Link to="/login" className="absolute">
          <BiArrowBack className="text-2xl text-slate-600 hover:text-black" title="back home" />
        </Link>
        <h1 className="text-center text-3xl font-semibold my-3 text-slate-700">Register</h1>
        <RegisterForm />
        <p className="text-center mt-6 mb-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold underline hover:no-underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
