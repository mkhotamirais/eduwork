const Button = ({
  children = "button",
  type = "button",
  className = "bg-blue-600 text-white mt-3 hover:bg-blue-500",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${className} border px-5 py-2 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes;

export default Button;
