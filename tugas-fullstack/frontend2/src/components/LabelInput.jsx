const LabelInput = ({ label, id, type = "text", placeholder, value, onChange, autoComplete }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border text-slate-600 focus:outline-none p-2 w-full rounded"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  );
};
LabelInput.propTypes;

export default LabelInput;
