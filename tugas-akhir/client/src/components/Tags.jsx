import { forwardRef } from "react";

export const H1 = ({ children, id, className }) => (
  <h1 id={id} className={`${className} font-semibold capitalize text-xl md:text-2xl leading-loose`}>
    {children}
  </h1>
);
H1.propTypes;

export const H2 = ({ children }) => (
  <h2 className={`font-medium capitalize text-lg md:text-xl leading-relaxed`}>{children}</h2>
);
H2.propTypes;

export const H3 = ({ children }) => <h3 className={`font-medium capitalize leading-relaxed`}>{children}</h3>;
H3.propTypes;

export const Label = ({ children, id }) => (
  <label htmlFor={id} className={`capitalize font-medium leading-relaxed`}>
    {children}
  </label>
);
Label.propTypes;

export const Input = forwardRef(({ children, type = "text", id, value, onChange, onFocus, placeholder, className }, ref) => (
  <input
    ref={ref}
    type={type}
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    placeholder={placeholder}
    className={`${className} w-full p-2 rounded focus:outline-slate-400 border`}
  >
    {children}
  </input>
));
Input.propTypes;
Input.displayName;

export const Textarea = ({ children, id, value, onChange, className }) => (
  <textarea
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`${className} border w-full rounded p-2 focus:outline-slate-400`}
  >
    {children}
  </textarea>
);
Textarea.propTypes;

export const Select = ({ children, id, value, onChange, className }) => (
  <select
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`${className} border w-full p-2 rounded focus:outline-slate-400`}
  >
    <option value="">--Select {id}--</option>
    {children}
  </select>
);
Select.propTypes;

export const Button = ({ children, type = "button", disabled, onClick, className }) => (
  <button
    type={type}
    disabled={disabled}
    className={`${className} bg-blue-500 text-white rounded p-2 hover:opacity-70 disabled:opacity-70`}
    onClick={onClick}
  >
    {children}
  </button>
);
Button.propTypes;
