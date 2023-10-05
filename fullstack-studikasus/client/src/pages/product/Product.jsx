import CardProduct from "./CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts, productSelectors } from "../../features/productSlice";

const Product = () => {
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
        {products.map((product) => (
          <CardProduct key={product._id}>
            <CardProduct.Ubah />
            <CardProduct.Atas
              image={`http://localhost:3000/${product.image_url}`}
            />
            <CardProduct.Tengah
              name={product.name}
              category={product.category.name}
              tags={product.tags.name}
            />
            <CardProduct.Bawah price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default Product;
