import { BsCartPlus } from "react-icons/bs";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardProduct = ({ children }) => {
  return <div className="border p-3 rounded-md flex flex-col">{children}</div>;
};

const Ubah = () => {
  return (
    <div className="flex justify-around border mb-4 rounded-lg overflow-hidden">
      <Link className="bg-green-500 w-1/2 text-white p-2 flex justify-center">
        <FiEdit />
      </Link>
      <button className="bg-red-500 w-1/2 text-white p-2 flex justify-center">
        <FiTrash2 />
      </button>
    </div>
  );
};
const Atas = ({ image }) => {
  return (
    <a href={image} className="block overflow-hidden">
      <img src={image} alt="image" className="hover:scale-110 duration-300" />
    </a>
  );
};

const Tengah = ({ name, category, tags }) => {
  return (
    <div className="flex-grow">
      <h1 className="text-2xl font-semibold mt-2 mb-1">{name}</h1>
      <p className="text-xl text-slate-600">{category}</p>
      <span className="text-sm bg-slate-500 text-white rounded-full px-1">
        {tags}
      </span>
    </div>
  );
};

const Bawah = ({ price, onClick }) => {
  return (
    <div className="flex items-center justify-between mt-3">
      <div className="font-semibold text-xl">{price}</div>
      <div className="mr-3">
        <BsCartPlus
          className="text-3xl text-blue-500 cursor-pointer"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

CardProduct.Ubah = Ubah;
CardProduct.Atas = Atas;
CardProduct.Tengah = Tengah;
CardProduct.Bawah = Bawah;

CardProduct.propTypes;
Ubah.propTypes;
Atas.propTypes;
Tengah.propTypes;
Bawah.propTypes;

export default CardProduct;
