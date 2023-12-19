const Btn = ({ type = "button", className, children, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} bg-blue-500 text-white leading-none hover:opacity-80 transition-all`}
    >
      {children}
    </button>
  );
};
Btn.propTypes;

export default Btn;
