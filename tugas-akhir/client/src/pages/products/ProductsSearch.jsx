import { FaSearch } from "react-icons/fa";
import { Button, Input } from "../../components/Tags";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAktif } from "../../features/activeSlice";

const ProductsSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SearchFocus = () => {
    navigate("/products");
    dispatch(setAktif("products"));
  };
  return (
    <form className="pt-3 md:pt-0 flex items-center">
      <Input
        id="search"
        onFocus={SearchFocus}
        placeholder={"Search here..."}
        className="border-white md:border-slate-300 h-10"
      />
      <Button className={"flex justify-center items-center -translate-x-1 h-10 w-12 "}>
        <FaSearch />
      </Button>
    </form>
  );
};

export default ProductsSearch;
