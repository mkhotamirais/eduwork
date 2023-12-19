import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const HCartBtn = () => {
  return (
    <NavLink to="/cart" title="cart" className={"relative"}>
      <AiOutlineShoppingCart />
      <div className="absolute top-2 right-1 text-xs bg-rose-500 leading-none text-white p-1 rounded-lg">20</div>
    </NavLink>
  );
};

export default HCartBtn;
