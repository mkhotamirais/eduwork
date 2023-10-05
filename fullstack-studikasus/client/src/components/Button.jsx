const Button = ({
  type = "button",
  children = "button",
  className = "p-2",
}) => {
  return (
    <button
      type={type}
      className={`${className} bg-blue-500 rounded text-white flex items-center justify-center leading-none`}
    >
      {children}
    </button>
  );
};
Button.propTypes;

export default Button;
