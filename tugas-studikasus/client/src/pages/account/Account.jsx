import { Link, NavLink, Outlet } from "react-router-dom";
import TopTitle from "../../components/TopTitle";
import Btn from "../../components/Btn";

const Account = () => {
  return (
    <TopTitle title="Account">
      <div className="grid grid-cols-4">
        <div className="col-span-1 border-r p-3 flex flex-col">
          <NavLink to="profil" className={"account-link"}>
            Profil
          </NavLink>
          <NavLink to="pemesanan" className={"account-link"}>
            Pemesanan
          </NavLink>
          <NavLink to="alamat" className={"account-link"}>
            Alamat
          </NavLink>
          <Link to="/login">
            <Btn className={"rounded mt-5 py-3 w-full"}>Logout</Btn>
          </Link>
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </TopTitle>
  );
};

export default Account;
