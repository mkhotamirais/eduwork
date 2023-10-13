import { useEffect } from "react";
import CardProduct from "./CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSelectors } from "../../features/productSlice.js";
import TagsProduct from "./TagsProduct";

const Product = () => {
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (products.length == 0) {
    return (
      <div className="text-center mt-5">
        <i className="font-semibold text-2xl">Hasil tidak ditemukan</i>
      </div>
    );
  }
  return (
    <>
      {/* <TagsProduct /> */}
      <div className="grid grid-cols-4 gap-3 mt-3">
        {products.map((p) => (
          <CardProduct key={p._id}>
            <CardProduct.Atas
              img_url={`http://localhost:3000/images/products/${p.image_url}`}
            />
            <CardProduct.Tengah title={p.name} category={p.category.name}>
              {p.tags.map((t) => (
                <span
                  key={t._id}
                  className="capitalize bg-slate-500 text-white leading-5 px-2 rounded-full text-sm mr-1"
                >
                  {t.name}
                </span>
              ))}
            </CardProduct.Tengah>
            <CardProduct.Bawah price={p.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default Product;
