const LabelInput = ({
  id,
  label,
  type,
  value,
  onChange,
  className = "mb-3",
  classInput,
  classLabel = "block",
  placeholder,
}) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`${classInput} border p-2 h-full hover:outline-none focus:outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
};
LabelInput.propTypes;

export default LabelInput;
