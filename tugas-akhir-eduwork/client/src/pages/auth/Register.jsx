import { useEffect, useRef, useState } from "react";
import { Button, H1, Input, Label } from "../../components/Tags";
import { AuthWrapper } from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { urlAuth } from "../../../envcaller";
import axios from "axios";
import RegisterMsg from "./RegisterMsg";

const Register = () => {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errUsername, setErrUsername] = useState(null);
  const [errEmail, setErrEmail] = useState(null);
  const [errConfPassword, setErrConfPassword] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const canSave = [username, email, password, confPassword].every(Boolean);
  const onRegister = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setLoading(true);
        setError(null);
        setSuccess(false);

        const data = { username, email, password };
        const response = await axios.post(`${urlAuth}/register`, data);
        if (response.data.error === 1) {
          const errorUsername = response.data.fields?.username;
          const errorEmail = response.data.fields?.email;
          errorUsername ? setErrUsername(errorUsername.message) : setErrUsername(null);
          errorEmail ? setErrEmail(errorEmail.message) : setErrEmail(null);
          if (password !== confPassword) {
            setErrConfPassword(true);
            return;
          } else setErrConfPassword(false);
        } else {
          setSuccess(true);
          setUsername("");
          setEmail("");
          setPassword("");
          setConfPassword("");
          setErrUsername(null);
          setErrEmail(null);
          setErrConfPassword(null);
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
      <RegisterMsg success={success} error={error} loading={loading} />
      <H1>Register</H1>
      <form onSubmit={onRegister}>
        <div className="mb-2">
          <Label id="username">Username</Label>
          <Input ref={usernameRef} id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errUsername ? <p className="text-sm text-rose-500">{errUsername}</p> : ""}
        </div>
        <div className="mb-2">
          <Label id="email">Email</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errEmail ? <p className="text-sm text-rose-500">{errEmail}</p> : ""}
        </div>
        <div className="mb-2">
          <Label id="password">Password</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-2">
          <Label id="confPassword">Confirm Password</Label>
          <Input type="password" id="confPassword" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          {errConfPassword ? <p className="text-sm text-rose-500">Konfirmasi password salah</p> : ""}
        </div>
        <Button type="submit" disabled={!canSave} className={"w-full mt-2"}>
          {loading ? <span>Loading...</span> : <span>Register</span>}
        </Button>
      </form>
      <p className="my-3">
        <span>Do not have an account? </span>
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </AuthWrapper>
  );
};

export default Register;
