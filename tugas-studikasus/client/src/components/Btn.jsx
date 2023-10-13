const Btn = ({ type, onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} leading-none bg-blue-500 text-white hover:opacity-80`}
    >
      {children}
    </button>
  );
};
Btn.propTypes;

export default Btn;
