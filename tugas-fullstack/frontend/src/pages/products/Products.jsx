import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors } from "./productSlice";
import ProductCard from "./ProductCard";
import ProductCategory from "./ProductCategory";
import { getTags, tagsSelectors } from "./tagSlice";
import ProductTag from "./ProductTag";
import Pagination from "./Pagination";
import FlexCenter from "../../components/FlexCenter";

const Products = () => {
  const products = useSelector(productSelectors.selectAll);
  const tags = useSelector(tagsSelectors.selectAll);
  const q = useSelector((s) => s.search.q);
  const category = useSelector((s) => s.choosedCategory.category);
  const [tagsParam, setTagsParam] = useState([]);
  const productsStatus = useSelector((s) => s.product.status);
  const productsError = useSelector((s) => s.product.error);

  const [pageSekarang, setPageSekarang] = useState(1);
  const pageDitampilkan = 4;
  const indexAkhir = pageSekarang * pageDitampilkan;
  const indexAwal = indexAkhir - pageDitampilkan;
  const produkPage = products.slice(indexAwal, indexAkhir);
  const totalPage = Math.ceil(products.length / pageDitampilkan);
  const nomorPages = [...Array(totalPage + 1).keys()].slice(1);

  const dispatch = useDispatch();

  function handleTag(tag) {
    tagsParam.includes(tag.name)
      ? setTagsParam((prev) => prev.filter((t) => t !== tag.name))
      : setTagsParam((prev) => [...prev, tag.name]);
  }

  const renderedProducts =
    products.length == 0 ? (
      <div className="text-center mt-5">
        <i className="font-semibold text-2xl">Hasil tidak ditemukan</i>
      </div>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {produkPage.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );

  useEffect(() => {
    dispatch(getProducts({ q, tagsParam, category }));
    dispatch(getTags());
    setPageSekarang(1);
  }, [dispatch, q, tagsParam, category]);

  let content = "";
  if (productsStatus === "loading") {
    content = (
      <FlexCenter>
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </FlexCenter>
    );
  } else if (productsStatus === "succeeded") {
    content = <>{renderedProducts}</>;
  } else if (productsStatus === "failed") {
    content = <FlexCenter>{productsError}</FlexCenter>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-slate-700 my-3">Products List</h1>
        <ProductCategory />
      </div>
      <div className="mb-3">
        <span>Tags: </span>
        {tags.map((tag) => (
          <ProductTag key={tag._id} tag={tag} className={"b"} onClick={() => handleTag(tag)} />
        ))}
      </div>
      <div className="mb-3">
        <Pagination
          nomorPages={nomorPages}
          setPageSekarang={setPageSekarang}
          pageSekarang={pageSekarang}
          totalPage={totalPage}
        />{" "}
      </div>

      {content}
    </div>
  );
};

export default Products;
