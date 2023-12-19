import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { image, name, price, tags } = product;
  return (
    <div className="border flex flex-col rounded-lg overflow-hidden">
      <a href={`http://localhost:3000/images/products/${image}`} className="h-40 overflow-hidden object-cover">
        <img
          src={`http://localhost:3000/images/products/${image}`}
          alt="product image"
          className="object-cover h-full w-full hover:scale-105 transition-all"
        />
      </a>
      <div className="p-3 flex-grow">
        <h1 className="uppercase font-medium">{name}</h1>
        <h3 className="text-2xl font-semibold text-slate-600">
          Rp{price.toLocaleString("id-ID", { style: "decimal", currency: "IDR", minimumFractionDigits: 0 })}
        </h3>
        <div>
          {tags.map((tag) => (
            <span key={tag._id} className="bg-gray-500 rounded text-xs text-white mr-1 px-1 capitalize">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <button className="p-3 pt-0">
        <BsCartPlus className="text-blue-500 text-2xl cursor-pointer hover:text-blue-700 font-bold" />
      </button>
    </div>
  );
};
ProductCard.propTypes;

export default ProductCard;
