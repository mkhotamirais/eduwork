import React from "react";
import Button from "../../components/Button";

class CcBasic extends React.Component {
  // cara 1
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 0,
  //     };
  //     this.handlePlus = this.handlePlus.bind(this);
  //     this.handleMinus = this.handleMinus.bind(this);
  //   }
  //   handlePlus() {
  //     this.setState({ value: this.state.value + 1 });
  //   }
  //   handleMinus() {
  //     if (this.state.value > 0) {
  //       this.setState({ value: this.state.value - 1 });
  //     }
  //   }

  //   cara 2
  state = { value: 0 };
  handlePlus = () => this.setState({ value: this.state.value + 1 });
  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <p>
          Nama {this.props.nama} umur {this.props.umur}
        </p>
        <Button onClick={this.handlePlus}>+</Button>
        <p>{this.state.value}</p>
        <Button onClick={this.handleMinus}>-</Button>
      </div>
    );
  }
}
CcBasic.propTypes;

export default CcBasic;
