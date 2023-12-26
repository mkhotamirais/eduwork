import { NavLink, Outlet } from "react-router-dom";
import { H1 } from "../components/Tags";

const AdminLayout = () => {
  return (
    <section id="adminLayout">
      <H1>Admin Page</H1>
      <nav className="bg-white rounded p-2 flex justify-start gap-2 items-center h-10">
        <NavLink to="category">Category</NavLink>
        <NavLink to="tags">Tags</NavLink>
        <NavLink to="productsAdmin">Product</NavLink>
      </nav>
      <div className="bg-white my-2 rounded p-3">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminLayout;
