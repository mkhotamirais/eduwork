import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const FcBasic = (props) => {
  const [value, setValue] = useState(0);
  const handlePlus = () => setValue(value + 1);
  const handleMinus = () => setValue(value - 1);
  return (
    <>
      <p>
        Hello {props.nama} umur {props.umur} asal {props.asal}
      </p>
      <Button onClick={handlePlus}>+</Button>
      <p>{value}</p>
      <Button onClick={handleMinus}>-</Button>
    </>
  );
};
FcBasic.defaultProps = {
  nama: "User",
  umur: 20,
};
FcBasic.propTypes = {
  asal: PropTypes.string.isRequired,
  nama: PropTypes.string,
  umur: PropTypes.number,
};
export default FcBasic;
