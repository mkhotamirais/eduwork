import { NavLink, Outlet } from "react-router-dom";
import MyBox from "../../layouts/MyBox";

const Profil = () => {
  return (
    <>
      <MyBox title="Account">
        <div className="p-4 grid grid-cols-7 gap-4">
          <ul className="col-span-2 border rounded overflow-hidden">
            <NavLink to="" className={"accountOpt"}>
              Profil
            </NavLink>
            <NavLink to="pemesanan" className={"accountOpt"}>
              Pemesanan
            </NavLink>
            <NavLink to="alamat" className={"accountOpt"}>
              Alamat
            </NavLink>
            <NavLink to="" className={"accountOpt"}>
              Logout
            </NavLink>
          </ul>
          <div className="border rounded col-span-5">
            <Outlet />
          </div>
        </div>
      </MyBox>
    </>
  );
};

export default Profil;
