import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const HLogo = () => {
  const [logo, setLogo] = useState(false);
  useEffect(() => {
    function changeLogo() {
      window.innerWidth < 644 ? setLogo(true) : setLogo(false);
    }
    changeLogo();
    window.addEventListener("resize", function () {
      changeLogo();
    });
  }, [logo]);
  return (
    <NavLink to="/">
      <span className={`${logo ? "hidden" : "block"} text-xl font-semibold`}>EDUWORK SHOP</span>
      <span className={`${logo ? "block" : "hidden"} text-3xl`}>
        <AiOutlineHome />
      </span>
    </NavLink>
  );
};

export default HLogo;
