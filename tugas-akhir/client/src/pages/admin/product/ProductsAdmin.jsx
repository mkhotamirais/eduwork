import { useDispatch, useSelector } from "react-redux";
import {
  GetIsShowAddProduct,
  GetIsShowUpdateProduct,
  HideUpdateProduct,
  ShowAddProduct,
} from "../../../features/productsSlice";
import ProductAddForm from "./ProductAddForm";
import ProductUpdateForm from "./ProductUpdateForm";
import ProductList from "./ProductList";
import { Button, H2, H3 } from "../../../components/Tags";
import { Link } from "react-router-dom";

const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const showAddProduct = useSelector(GetIsShowAddProduct);
  const showUpdateProduct = useSelector(GetIsShowUpdateProduct);
  const onAddProduct = () => {
    dispatch(HideUpdateProduct());
    dispatch(ShowAddProduct());
  };

  return (
    <section className="bg-white p-3 rounded mt-2">
      <div className="flex justify-between items-center">
        <H2>Product</H2>
        <Link to="/admin/productsAdmin">
          <Button onClick={onAddProduct} className={showAddProduct ? "hidden" : "block"}>
            Add Product
          </Button>
        </Link>
      </div>
      <ProductAddForm className={showAddProduct ? "block" : "hidden"} />
      <ProductUpdateForm className={showUpdateProduct ? "block" : "hidden"} />
      <br />
      <H3>Product List</H3>
      <ProductList />
    </section>
  );
};

export default ProductsAdmin;
