const Radio = ({ id, name, children, className }) => {
  return (
    <div className="radioBox">
      <input type="radio" name={name} id={id} className={`${className}`} />
      <label className="ml-2" htmlFor={id}>
        {children}
      </label>
      <br />
    </div>
  );
};
Radio.propTypes;
export default Radio;
