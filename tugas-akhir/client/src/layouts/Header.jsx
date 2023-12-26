import { NavLink } from "react-router-dom";
import { H1 } from "../components/Tags";
import { AuthBtn } from "./AuthBtn";
import { useEffect } from "react";
import ProductsSearch from "../pages/products/ProductsSearch";
import { useDispatch, useSelector } from "react-redux";
import { getAktif, setAktif } from "../features/activeSlice";
import CartBtn from "./CartBtn";

const navList = [
  { title: "products", to: "/products" },
  { title: "admin", to: "/admin" },
];

const Header = () => {
  const aktif = useSelector(getAktif);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const id = e.target.id;
      if (id == "logo" || id == "svgLayer") dispatch(setAktif(null));
    });
  }, [dispatch]);

  const onAktif = (item) => {
    aktif === item.title ? dispatch(setAktif(null)) : dispatch(setAktif(item.title));
  };
  return (
    <header className="h-16 flex px-3 lg:px-12 justify-between items-center border-b">
      <NavLink to="/">
        <H1 id="logo">Home</H1>
      </NavLink>
      <div className="hidden md:block w-1/2">
        <ProductsSearch />
      </div>
      <nav className="flex items-center">
        {navList.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            onClick={() => onAktif(item)}
            className={`navList ${aktif === item.title ? "text-slate-400" : "text-slate-800"}`}
          >
            {item.title}
          </NavLink>
        ))}
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
