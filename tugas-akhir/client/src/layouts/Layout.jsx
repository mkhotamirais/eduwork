import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-8rem)] px-3 lg:px-12 bg-slate-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
