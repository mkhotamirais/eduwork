import HSearch from "./header/HSearch";
import HCartBtn from "./header/HCartBtn";
import HAuthLogin from "./header/HAuthLogin";
import HLogo from "./header/HLogo";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log("halo");
  }, []);
  return (
    <header className="border-b h-16 px-3 md:px-16 flex items-center justify-between">
      <HLogo />
      <HSearch />
      <nav className="text-3xl flex h-full">
        <HCartBtn />
        <HAuthLogin />
        halo
      </nav>
    </header>
  );
};

export default Header;
