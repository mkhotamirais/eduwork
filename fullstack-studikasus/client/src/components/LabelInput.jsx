const LabelInput = ({
  type = "text",
  id,
  placeholder = "placeholder",
  label = "label",
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="border w-full p-2 rounded"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
LabelInput.propTypes;

export default LabelInput;
