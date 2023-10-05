const MyBox = ({ title = "judul", children }) => {
  return (
    <>
      <div className="border rounded-lg mt-8">
        <h1 className="p-3 pl-5 border-b bg-slate-100 font-semibold text-xl">
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};
MyBox.propTypes;

export default MyBox;
