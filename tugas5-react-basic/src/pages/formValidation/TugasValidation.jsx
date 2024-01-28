import React from "react";
import * as Validator from "validatorjs";

class TugasValidation extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // ----- handle error with validatorjs npm
    let data = { email, password };
    let rules = {
      email: "required|email",
      password: "required",
    };
    let validation = new Validator(data, rules);
    validation.passes();
    console.log(validation.errors.all());

    // ----- handle error with regex
    // let message = [];
    // if (email.length === 0) {
    //   message = [...message, "Email tidak boleh kosong"];
    // }
    // if (password.length === 0) {
    //   message = [...message, "Password tidak boleh kosong"];
    // }
    // // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // if (!email.match(regex)) {
    //   message = [...message, "Email tidak valid"];
    // }
    // if (password.length < 8) {
    //   message = [...message, "Password terlalu pendek"];
    // } else {
    //   alert(`
    //     email: ${this.state.email}
    //     password: ${this.state.password}
    //     `);
    //   this.setState({
    //     errors: [],
    //   });
    // }
    // if (message.length > 0) {
    //   this.setState(
    //     {
    //       errors: message,
    //     },
    //     () => console.log(this.state.errors)
    //   );
    // }
  };

  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "10px",
    };
    return (
      <div style={style}>
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h4 className="text-2xl font-semibold">Login Page</h4>
        <form onSubmit={this.handleSubmit} className="mt-5">
          <Input
            type="email"
            name="email"
            label="Email"
            onChange={(value) => this.setState({ email: value })}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            onChange={(value) => this.setState({ password: value })}
          />
          <button
            type="submit"
            className="border p-2 rounded mt-2 bg-blue-600 text-white"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const Input = ({ label, type, name, onChange }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <br />
      <input
        type={type}
        name={name}
        className="border"
        onChange={(e) => onChange(e.target.value)}
      />
      <br />
    </>
  );
};
Input.propTypes;

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
ShowErrors.propTypes;

export default TugasValidation;
