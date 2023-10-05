const Button = ({ type = "button", children, className }) => {
  return (
    <button
      type={type}
      className={`${className} bg-blue-500 text-white rounded-md`}
    >
      {children}
    </button>
  );
};
Button.propTypes;

export default Button;
