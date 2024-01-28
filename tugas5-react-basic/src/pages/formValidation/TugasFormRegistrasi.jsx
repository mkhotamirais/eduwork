import { useState } from "react";
import validator from "validator";
import LabelInput from "../../components/form/LabelInput";
import Button from "../../components/Button";

const TugasFormRegistrasi = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let message = [];
    setError([]);
    setUsername("");
    setEmail("");
    setPassword("");
    setPassword2("");
    if (email == "") {
      message = [...message, "Email tidak boleh kosong"];
    } else if (username == "") {
      message = [...message, "Username tidak boleh kosong"];
    } else if (password == "") {
      message = [...message, "Password tidak boleh kosong"];
    } else if (password != password2) {
      message = [...message, "Konfirmasi password salah "];
    } else if (!validator.isEmail(email)) {
      message = [...message, "Email tidak valid"];
    } else if (password.length < 8) {
      message = [...message, "Password minimal 8 karakter"];
    } else {
      alert(`
      username: ${username}
      email: ${email}
      password: ${password}
      passowrd2: ${password2}
      `);
    }

    if (message.length > 0) {
      setError(message);
    }
  };
  return (
    <div>
      {error.length > 0 && <ErrorMessage errors={error} />}
      <form onSubmit={handleSubmit}>
        <LabelInput
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        >
          Username
        </LabelInput>
        <LabelInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </LabelInput>
        <LabelInput
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </LabelInput>
        <LabelInput
          id="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        >
          Konfirmasi Password
        </LabelInput>
        <Button type="submit">Registrasi</Button>
      </form>
    </div>
  );
};

const ErrorMessage = ({ errors }) => {
  return (
    <ul>
      {errors.map((item, i) => (
        <li key={i} className="text-red-500">
          {item}
        </li>
      ))}
    </ul>
  );
};
ErrorMessage.propTypes;
export default TugasFormRegistrasi;
