import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getNum } from "../features/cartsSlice";

const Carts = () => {
  const num = useSelector(getNum);
  return (
    <NavLink to="carts" className="relative">
      <FaCartShopping className="text-xl" />
      <span className="bg-rose-500 text-xs rounded-full text-white p-[0.2rem] absolute -top-3 -right-2 leading-none">
        {num}
      </span>
    </NavLink>
  );
};

export default Carts;
