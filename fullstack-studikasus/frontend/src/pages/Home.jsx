import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTagsFill } from "react-icons/bs";
import Button from "../components/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsCategory,
  productSelectors,
} from "../features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsCategory());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="rounded border p-3 flex flex-col" key={product._id}>
            <a
              href={`http://localhost:3000/${product.image_url}`}
              className="overflow-hidden block"
            >
              <img
                src={`http://localhost:3000/${product.image_url}`}
                alt=""
                className="w-full max-h-56 object-cover hover:scale-110 duration-300"
              />
            </a>
            <h1 className="text-2xl font-semibold my-2 capitalize">
              {product.name}
            </h1>
            <div className=" flex flex-row items-center">
              <div className="text-xs bg-slate-500 px-1.5 py-0.5 text-white rounded-full">
                <BsTagsFill className="inline mr-1" /> {product.tags.name}
              </div>
            </div>
            <h3 className="text-md font-semibold text-slate-600 my-1 flex-grow">
              {product.category.name}
            </h3>
            <div className="flex justify-between my-2">
              <h3 className="text-xl font-semibold">Rp1000</h3>
              <Button className="text-xl px-3 py-2">
                <AiOutlineShoppingCart />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h1>Tidak ada data</h1>
      )}
    </div>
  );
};

export default Home;
