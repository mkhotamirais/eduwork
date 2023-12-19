import { useEffect, useState } from "react";
import Btn from "../../components/Btn";
import LabelInput from "../../components/LabelInput";
import { useDispatch, useSelector } from "react-redux";
import { getError, getSuccess, login } from "../app/features/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();

  useEffect(() => {
    console.log(token);
  }, [token]);

  const success = useSelector(getSuccess);
  const error = useSelector(getError);

  const isInputs = Boolean(email) && Boolean(password);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isInputs) {
      dispatch(login({ email, password })).then((res) => {
        if (res.payload.signed) {
          setEmail("");
          setPassword("");
          setToken(res.payload.signed);
          // navigate("/");
        }
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* {success && <p className="rounded p-2 bg-blue-200 text-blue-600 mb-2">{success}</p>} */}
      {error && <p className="rounded p-2 bg-rose-200 text-rose-600 mb-2">{error}</p>}
      <LabelInput
        label="Email"
        id="email"
        placeholder={"example@gmail.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete={"off"}
      />
      <LabelInput
        label="Password"
        id="password"
        placeholder={"********"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Btn type={"submit"} disabled={!isInputs} className={"w-full rounded-lg py-3 mt-3"}>
        Login
      </Btn>
    </form>
  );
};

export default LoginForm;
