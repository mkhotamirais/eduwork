import { useState } from "react";
import Btn from "../../../components/Btn";
import LabelInput from "../../../components/LabelInput";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getProductQ } from "../../../features/productSlice.js";

const FilterQ = () => {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const handleQ = (e) => {
    e.preventDefault();
    dispatch(getProductQ(q));
  };
  return (
    <form onSubmit={handleQ} className="flex items-center h-10">
      <LabelInput
        type={"search"}
        className="h-full"
        classInput={"border-slate-400 rounded-md rounded-r-none bg-inherit"}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={"Product Name"}
      />
      <Btn
        type={"submit"}
        className={
          "bg-blue-500 text-xl px-2 h-full rounded-r-md -translate-x-1"
        }
      >
        <BsSearch className="leading-none" />
      </Btn>
    </form>
  );
};
FilterQ.propTypes;

export default FilterQ;
