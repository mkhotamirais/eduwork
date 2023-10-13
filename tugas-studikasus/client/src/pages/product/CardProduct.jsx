import { BsCartPlus } from "react-icons/bs";
import Btn from "../../components/Btn";

const CardProduct = ({ children }) => {
  return (
    <div className="border rounded-md p-3 bg-gradient-to-b from-blue-900 to-white flex flex-col">
      {children}
    </div>
  );
};

const Atas = ({ img_url }) => {
  return (
    <div className="overflow-hidden bg-gradient-to-t from-blue-900 to-blue-100 p-1 rounded">
      <a href={img_url}>
        <img
          src={img_url}
          alt="eduwork-pos-image"
          className="hover:scale-110 duration-300"
        />
      </a>
    </div>
  );
};

const Tengah = ({ title, category, children }) => {
  return (
    <div className="flex-grow">
      <h1 className="capitalize font-semibold text-2xl mt-3">{title}</h1>
      <p className="capitalize font-semibold text-slate-600 leading-loose">
        {category}
      </p>
      <div className="flex">{children}</div>
    </div>
  );
};

const Bawah = ({ price }) => {
  return (
    <div className="flex justify-between items-center mt-3">
      <span className="text-2xl text-slate-700 font-semibold">{price}</span>
      <Btn className={"rounded-md p-2 mr-3"}>
        <BsCartPlus className="text-2xl" />
      </Btn>
    </div>
  );
};
CardProduct.Atas = Atas;
CardProduct.Tengah = Tengah;
CardProduct.Bawah = Bawah;

CardProduct.propTypes;
Atas.propTypes;
Tengah.propTypes;
Bawah.propTypes;

export default CardProduct;
