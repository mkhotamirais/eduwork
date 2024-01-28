import { forwardRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const InputSearch = forwardRef(({ value, onChange, onKeyUp, onClick }, ref) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <Button variant="dark" id="button-addon2" onClick={onClick} ref={ref}>
        Search
      </Button>
    </InputGroup>
  );
});
InputSearch.propTypes;

export default InputSearch;
