import { NavLink } from "react-router-dom";
import { H1 } from "../components/Tags";
import { AuthBtn } from "./AuthBtn";
import ProductsSearch from "../pages/products/ProductsSearch";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="h-16 flex px-3 lg:px-12 justify-between items-center border-b">
      <NavLink to="/">
        <H1 id="logo">Home</H1>
      </NavLink>
      <div className="hidden md:block w-1/2">
        <ProductsSearch />
      </div>
      <nav className="flex items-center">
        <NavLink to="/products">Products</NavLink>
        <CartBtn />
        <AuthBtn />
      </nav>
    </header>
  );
};

export default Header;

// export const NavItems = ({ item, i }) => {
//   const [aktif, setAktif] = useState(null);
//   const onActive = () => {
//     if (item.title === i) {
//       setAktif(null);
//     } else setAktif(i);
//   };
//   return (
//     <NavLink to={item.to} onClick={onActive} className={`${aktif === item.title ? "font-bold" : "font-light"}`}>
//       {item.title}
//     </NavLink>
//   );
// };
// NavItems.propTypes;
