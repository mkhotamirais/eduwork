const Input = ({ type = "text", id, className, value, onChange }) => {
  return (
    <input
      type={type}
      name={id}
      id={id}
      className={`${className} border w-full rounded p-2`}
      value={value}
      onChange={onChange}
    />
  );
};
Input.propTypes;

export default Input;
