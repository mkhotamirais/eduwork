import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b h-16 px-3 lg:px-16 flex items-center justify-between">
      <a href="#">logo</a>
      <nav className="flex">
        <NavLink to="/">Products</NavLink>
        <p>cari</p>
      </nav>
    </header>
  );
};

export default Header;
