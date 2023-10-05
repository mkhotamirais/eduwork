import { Outlet } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import FormCategory from "../components/FormCategory";
import FormSearch from "../components/FormSearch";

const RootLayout = () => {
  return (
    <>
      <header className="border-b-2 flex justify-between items-center px-3 md:px-16 h-16 fixed top-0 left-0 right-0 backdrop-blur">
        <div className="mynav">
          <div className="uppercase text-3xl">pos</div>
          <FormCategory />
        </div>
        <div className="mynav search">
          <FormSearch />
        </div>
        <div className="mynav">
          <AiOutlineShoppingCart />
          <AiOutlineUser />
        </div>
      </header>
      <main className="min-h-screen mt-16 pb-20 pt-4 px-3 md:px-16">
        <Outlet />
      </main>
      <footer className="border h-16 absolute bottom-0 left-0 right-0 text-center">
        footer
      </footer>
    </>
  );
};

export default RootLayout;
