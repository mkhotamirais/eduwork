import Input from "./Input";
import Label from "./Label";

const LabelInput = ({
  id = "labelInput",
  type = "text",
  classLabel,
  classInput,
  children = "LebelInput",
  value,
  onChange,
}) => {
  return (
    <>
      <Label hf={id} className={classLabel}>
        {children}
      </Label>
      <Input
        type={type}
        id={id}
        className={classInput}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
LabelInput.propTypes;

export default LabelInput;
