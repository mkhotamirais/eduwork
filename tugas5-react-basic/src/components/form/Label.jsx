const Label = ({ hf, children, className }) => {
  return (
    <label htmlFor={hf} className={`${className} block mb-2 font-semibold`}>
      {children}
    </label>
  );
};
Label.propTypes;

export default Label;
