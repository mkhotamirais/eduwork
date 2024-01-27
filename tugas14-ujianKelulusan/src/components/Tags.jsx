export const AsideGrid = ({ children, className }) => <aside className={`${className}`}>{children}</aside>;
AsideGrid.propTypes;

export const H2 = ({ children }) => <h2 className={`font-semibold capitalize leading-relaxed`}>{children}</h2>;
H2.propTypes;

export const Button = ({ children = "button", type = "button", disabled, className, onClick }) => (
  <button
    type={type}
    disabled={disabled}
    className={`border p-1 rounded leading-none bg-blue-500 text-white hover:opacity-70 disabled:opacity-70 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
Button.propTypes;
