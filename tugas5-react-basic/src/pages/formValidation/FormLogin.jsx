import Button from "../../components/Button";
import LabelInput from "../../components/form/LabelInput";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <LabelInput>Username</LabelInput>
        <LabelInput>Password</LabelInput>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default FormLogin;
