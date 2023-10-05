import { Link } from "react-router-dom";
import Button from "../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import GetByQ from "./headerComp/getByQ";
import GetByCategory from "./headerComp/GetByCategory";

const email = localStorage.getItem("email");

const Header = () => {
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };
  return (
    <header className="border h-16 flex items-center justify-between px-4 md:px-16 sticky top-0 backdrop-blur-lg z-50">
      <a href="" className="uppercase font-bold">
        eduwork pos
      </a>
      <ul className="flex items-center justify-between">
        <li className="navlist">
          <Link to="" className="navlink">
            Product
          </Link>
        </li>
        <div className="navlist">
          <GetByCategory />
        </div>
        <li className="navlist">
          <GetByQ />
        </li>
        <div className="navlist relative">
          <Link to="/keranjang">
            <AiOutlineShoppingCart className="text-2xl ml-5" />
          </Link>
        </div>
        <div className="navlist">
          <Link to="/profil">
            <BiUser className="text-2xl ml-5" />
          </Link>
        </div>
        {email ? (
          <div className="navlist">
            <Link to="/login" onClick={logout}>
              <Button className="ml-5 px-3 py-2 bg-slate-500">Logout</Button>
            </Link>
          </div>
        ) : (
          <div className="navlist">
            <Link to="/login">
              <Button className="ml-5 px-3 py-2">Login</Button>
            </Link>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Header;
