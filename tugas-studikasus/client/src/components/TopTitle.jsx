import { Link } from "react-router-dom";

const TopTitle = ({ children, title }) => {
  return (
    <div className="border rounded-lg mt-5 pb-3">
      <h1 className="text-slate-700 font-semibold text-2xl bg-slate-100 py-2 px-4 border-b flex justify-between">
        {title}
        <Link to="/product" className="text-xl text-blue-500">
          Back to products
        </Link>
      </h1>
      {children}
    </div>
  );
};
TopTitle.propTypes;

export default TopTitle;
