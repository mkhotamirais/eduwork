import { NavLink, Outlet } from "react-router-dom";
import NavSearch from "./pages/header/NavSearch";
import CartBtn from "./pages/cart/CartBtn";
import { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const App = () => {
  useEffect(() => {
    function changeLogo() {
      const logoLg = document.querySelector("#logo-lg");
      const logoSm = document.querySelector("#logo-sm");
      if (window.innerWidth <= 644) {
        logoLg.style.display = "none";
        logoSm.style.display = "block";
      } else {
        logoLg.style.display = "block";
        logoSm.style.display = "none";
      }
    }
    changeLogo();
    window.addEventListener("resize", () => {
      changeLogo();
    });
  });
  return (
    <>
      <header className="">
        <NavLink to="/" className={"font-semibold text-base md:text-xl"}>
          <span id={"logo-lg"}>EDUWORK-FULLSTACK</span>
          <span id={"logo-sm"}>
            <AiOutlineHome className="text-2xl" />
          </span>
        </NavLink>
        <NavSearch />
        <nav>
          <NavLink to="/cart" onClick={() => console.log("halo")}>
            <CartBtn />
          </NavLink>
          <NavLink to="/login" title="login">
            <FiLogIn />
          </NavLink>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="">
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
