import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LabelInput from "../../components/LabelInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    navigate("/product");
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="border bg-white rounded-lg p-5 w-1/4">
        <h1 className="text-2xl text-center font-semibold">Login</h1>
        <form onSubmit={handleLogin}>
          <LabelInput
            id="email"
            type="email"
            placeholder="email@gmail.com"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelInput
            id="password"
            type="password"
            placeholder="********"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full py-3">
            Login
          </Button>
        </form>
        <p className="text-center mt-5">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
