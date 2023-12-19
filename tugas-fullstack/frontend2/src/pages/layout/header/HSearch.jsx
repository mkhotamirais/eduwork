import { AiOutlineSearch } from "react-icons/ai";
import Btn from "../../../components/Btn";

const HSearch = () => {
  return (
    <form className="border flex items-center h-10 sm:h-12 rounded-xl overflow-hidden w-[55%] sm:w-1/2">
      <input
        type="text"
        className="text-lg text-slate-600 h-full w-full p-2 focus:outline-none"
        placeholder="Search here..."
      />
      <Btn className={"h-full w-12 flex justify-center items-center"}>
        <AiOutlineSearch className="text-2xl" />
      </Btn>
    </form>
  );
};

export default HSearch;
