const Checkbox = ({ hf, children = "Ceklis" }) => {
  return (
    <div className="checkboxbox">
      <input type="checkbox" htmlFor={hf} />
      <label className="ml-2" name={name} id={hf}>
        {children}
      </label>
    </div>
  );
};
Checkbox.propTypes;

export default Checkbox;
