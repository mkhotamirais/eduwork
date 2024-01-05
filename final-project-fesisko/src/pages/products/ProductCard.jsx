import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartsSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const onAddToCart = (id) => {
    dispatch(addToCart({ id }));
  };
  return (
    <div className="bg-white border rounded p-3">
      <Link to={`product/${product.id}`}>
        <figure>
          <img src={product.photo} alt={product.name} />
        </figure>
        <h3 className="capitalize text-xl font-semibold leading-relaxed text-blue-500 hover:underline">{product.name}</h3>
      </Link>
      <div className="text-2xl text-slate-600 font-semibold flex justify-between items-center">
        <div>
          {product.currency}
          {product.price}
        </div>
        <button onClick={() => onAddToCart(product.id)} className="hover:text-blue-500">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};
ProductCard.propTypes;

export default ProductCard;
