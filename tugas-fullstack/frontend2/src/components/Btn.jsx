const Btn = ({ type, className, disabled, children }) => {
  return (
    <button
      type={type}
      className={`${className} bg-blue-500 text-white leading-none hover:opacity-80 disabled:opacity-80`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Btn.propTypes;

export default Btn;
