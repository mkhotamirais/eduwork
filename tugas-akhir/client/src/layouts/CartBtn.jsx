import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCount } from "../features/cartSlice";

const CartBtn = () => {
  const cartCount = useSelector(getCount);
  return (
    <NavLink to="cart" className={"relative"}>
      <div id="cartBtnLayer" className="bg-transparent w-full h-full absolute"></div>
      <FaCartShopping className="text-2xl" />
      <span className="rounded-lg leading-none absolute top-[8px] right-1 md:right-3 bg-rose-500 text-white text-xs p-[3px]">
        {cartCount}
      </span>
    </NavLink>
  );
};

export default CartBtn;
