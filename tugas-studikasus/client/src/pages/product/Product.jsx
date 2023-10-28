import CardProduct from "./CardProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  // getProductsLimit8,
  // productSelectors,
} from "../../features/productSlice.js";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const Product = () => {
  const products = useSelector(productSelectors.selectAll);
  const nama = useSelector((state) => state.product.nama);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(nama);
  }, [dispatch]);

  const [pageSekarang, setPageSekarang] = useState(1);
  const pageDitampilkan = 4;
  const indexAkhir = pageSekarang * pageDitampilkan;
  const indexAwal = indexAkhir - pageDitampilkan;
  const produkPage = products.slice(indexAwal, indexAkhir);
  const totalPage = Math.ceil(products.length / pageDitampilkan);
  const nomorPages = [...Array(totalPage + 1).keys()].slice(1);
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
      <Pagination
        nomorPages={nomorPages}
        setPageSekarang={setPageSekarang}
        pageSekarang={pageSekarang}
        totalPage={totalPage}
      />
      <div className="grid grid-cols-4 gap-3 mt-3">
        {produkPage.map((p, i) => {
          if (i < 8) {
            return (
              <CardProduct key={p._id}>
                <CardProduct.Atas img_url={`http://localhost:3000/images/products/${p.image_url}`} />
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
            );
          }
        })}
      </div>
    </>
  );
};

export default Product;
