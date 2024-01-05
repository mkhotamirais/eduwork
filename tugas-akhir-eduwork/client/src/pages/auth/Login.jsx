import { useEffect, useRef, useState } from "react";
import { Button, H1, Input, Label } from "../../components/Tags";
import { AuthWrapper } from "../../components/Wrapper";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAuth } from "../../../envcaller";
import { useDispatch } from "react-redux";
import { addToken } from "../../features/authSlice";

const Login = () => {
  const emailRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const dispatch = useDispatch();

  const canSave = Boolean(email) && Boolean(password);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onLogin = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setLoading(true);
        setError(null);
        const data = { email, password };
        const response = await axios.post(`${urlAuth}/login`, data);
        if (response.data.error && response.data.error == 1) {
          setError(response.data.message);
        } else {
          dispatch(addToken(response.data.signed));
          location.href = "/";
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <AuthWrapper>
      {error ? <p className="w-full p-2 rounded bg-rose-100 border border-rose-400 text-rose-700">{error}</p> : null}
      <H1>Login</H1>
      <form onSubmit={onLogin}>
        <div className="mb-2">
          <Label id="email">Email</Label>
          <Input ref={emailRef} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
          <Label id="password">Password</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" disabled={!canSave} className={"w-full mt-2"}>
          {loading ? <span>Loading...</span> : <span>Login</span>}
        </Button>
      </form>
      <p className="my-3">
        <span>Do not have an account? </span>
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </AuthWrapper>
  );
};

export default Login;
