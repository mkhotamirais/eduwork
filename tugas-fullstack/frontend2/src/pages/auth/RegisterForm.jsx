import { useState } from "react";
import LabelInput from "../../components/LabelInput";
import Btn from "../../components/Btn";
import { useDispatch, useSelector } from "react-redux";
import { getError, getSuccess, register } from "../app/features/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const success = useSelector(getSuccess);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInputs = Boolean(username) && Boolean(email) && Boolean(password) && Boolean(password2);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isInputs) {
      dispatch(register({ username, email, password }))
        .then((res) => {
          if (res.payload.message == "Register success") {
            setUsername("");
            setEmail("");
            setPassword("");
            setPassword2("");
            navigate("/login");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {success && (
        <div className="bg-blue-200 rounded p-2 text-blue-600">
          <p>
            {success}{" "}
            <a href="/login" className="underline text-blue-800">
              Login
            </a>
          </p>
        </div>
      )}
      <LabelInput
        label="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={"example@gmail.com"}
      />
      {error?.full_name?.message && <p className="text-rose-500 text-sm">{error.full_name.message}</p>}
      <LabelInput
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"example@gmail.com"}
      />
      {error?.email?.message && <p className="text-rose-500 text-sm">{error.email.message}</p>}
      <LabelInput
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"********"}
      />
      {error?.password?.message && <p className="text-rose-500 text-sm">{error.password.message}</p>}
      <LabelInput
        label="Confirm Password"
        type="password"
        id="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder={"********"}
      />
      {password !== password2 && <p className="text-rose-500 text-sm">Konfirmasi password tidak sesuai</p>}
      <Btn type={"submit"} className={`w-full rounded-lg py-3 mt-3`} disabled={!isInputs}>
        Register
      </Btn>
    </form>
  );
};

export default RegisterForm;
