import { useState } from "react";
import Btn from "../../components/Btn";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { inputQ } from "./searchSlice";

const NavSearch = () => {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  function handleQ(e) {
    e.preventDefault();
    dispatch(inputQ(q));
  }
  return (
    <form onSubmit={handleQ} className="border flex h-10 rounded-md overflow-hidden w-[60%] sm:w-1/2">
      <input
        type="text"
        onChange={(e) => setQ(e.target.value)}
        className="text-slate-600 px-2 focus:outline-none h-full w-full"
        placeholder="Search here"
      />
      <Btn type="submit" className={"w-10 h-10 flex items-center justify-center"}>
        <BsSearch className="text-lg" />
      </Btn>
    </form>
  );
};

export default NavSearch;
