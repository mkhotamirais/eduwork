import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsQ } from "../features/productSlice";

const FormSearch = () => {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const handleQ = (e) => {
    e.preventDefault();
    dispatch(getProductsQ(q));
  };
  return (
    <>
      <form onSubmit={handleQ} className="flex">
        <input
          type="text"
          className="border text-xl px-2 py-1 focus:outline-blue-500"
          value={q}
          name="search"
          onChange={(e) => setQ(e.target.value)}
        />
        <Button type="submit" className={"p-2 rounded-l-none -translate-x-1"}>
          <AiOutlineSearch className="text-2xl" />
        </Button>
      </form>
    </>
  );
};
FormSearch.propTypes;

export default FormSearch;
