import { Link } from "react-router-dom";
import FilterQ from "./headerComp/FilterQ";
import FilterCat from "./headerComp/FilterCat";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import UserAction from "./headerComp/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { munculhilang } from "../../features/useractionSlice";
import CartCount from "./headerComp/CartCount";

const Header = () => {
  const useraction = useSelector((state) => state.useraction.value);
  const dispatch = useDispatch();
  return (
    <>
      <header className="z-50 h-16 border-b flex items-center justify-between px-3 md:px-16 sticky top-0 backdrop-blur-[3px] bg-[hsla(0,0%,100%,.8)]">
        <Link to="" className="uppercase font-semibold text-xl">
          mkhotami pos
        </Link>

        <ul className="flex">
          <li className="nav-list">
            <FilterCat />
          </li>
          <li className="nav-list">
            <FilterQ />
          </li>
          <div className="nav-list relative">
            <Link to="keranjang">
              <AiOutlineShoppingCart className="text-2xl hover:text-slate-500" />
              <CartCount />
            </Link>
          </div>
          <div className="nav-list relative">
            <AiOutlineUser
              id="userBtn"
              className="text-2xl cursor-pointer hover:text-slate-500"
              onMouseOver={() => dispatch(munculhilang())}
            />
            <UserAction className={`${useraction ? "absolute" : "hidden"}`} />
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
