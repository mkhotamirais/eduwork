const LabelInput = ({ label = "label", id, type = "text", value, onChange, placeholder }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={id} className="block capitalize leading-loose font-medium">
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="border focus:outline-none w-full p-2 rounded"
        />
      </div>
    </div>
  );
};
LabelInput.propTypes;

export default LabelInput;
