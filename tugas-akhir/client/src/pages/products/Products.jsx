import { H1 } from "../../components/Tags";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { getError, getStatus, selectAllProducts } from "../../features/productsSlice";
import ProductsSearch from "./ProductsSearch";
import Tags from "./TagsOption";
import Category from "./CategoryOption";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  return (
    <section>
      <H1 className={"hidden md:block md:pt-3"}>Products List</H1>
      <div className="block md:hidden">
        <ProductsSearch />
      </div>

      <div className="pt-3">
        {error ? (
          <p className="text-rose-500 text-center">
            <i>{error}</i>
          </p>
        ) : null}
        {status === "loading" ? <p className="text-center">Loading data...</p> : null}
        {!error && status === "succeeded" ? (
          <>
            <div className="md:flex md:gap-3 md: justify-between">
              <Tags />
              <Category />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Products;
