const Textarea = ({ id, className }) => {
  return (
    <textarea
      name={id}
      id={id}
      cols="30"
      rows="3"
      className={`${className} border w-full rounded p-2`}
    ></textarea>
  );
};
Textarea.propTypes;

export default Textarea;
