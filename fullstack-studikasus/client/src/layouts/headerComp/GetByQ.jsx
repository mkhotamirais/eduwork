import { BsSearch } from "react-icons/bs";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductQ } from "../../features/productSlice";

const GetByQ = () => {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const handleQ = (e) => {
    e.preventDefault();
    dispatch(getProductQ(q));
  };
  return (
    <>
      <form onSubmit={handleQ} className="flex items-center ml-3">
        <input
          type="text"
          className="border p-[0.4rem] leading-none rounded-md rounded-r-none focus:outline-none text-md bg-inherit"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <Button
          type="submit"
          className="p-2.5 rounded-md rounded-l-none -translate-x-1"
        >
          <BsSearch className="text-md" />
        </Button>
      </form>
    </>
  );
};

export default GetByQ;
