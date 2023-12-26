import { useDispatch } from "react-redux";
import { imgProducts } from "../../../envcaller";
import { Button, H2 } from "../../components/Tags";
import { FaCartPlus } from "react-icons/fa";
import { addCartCount } from "../../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = (name) => {
    dispatch(addCartCount());
    console.log(name);
  };
  return (
    <div className="bg-white rounded p-3 flex flex-col">
      <figure className="rounded overflow-hidden h-32 md:h-48 border">
        <a href={`${imgProducts}/${product.image}`}>
          <img
            src={`${imgProducts}/${product.image}`}
            alt="product_image"
            className="object-cover object-center h-full w-full border-rose-500 hover:scale-110 transition-all duration-300"
          />
        </a>
      </figure>
      <H2>{product.name.length > 20 ? product.name.substring(0, 20) + "..." : product.name}</H2>
      <p className="flex-grow">
        {product.description.length > 60 ? product.description.substring(0, 60) + "..." : product.description}
      </p>
      <div className="flex justify-between px-0 md:px-2 p-2">
        <H2>Rp{product.price.toLocaleString("id-ID")}</H2>
        <Button onClick={() => onAddToCart(product.name)}>
          <FaCartPlus className="text-lg" />
        </Button>
      </div>
    </div>
  );
};
ProductCard.propTypes;

export default ProductCard;
