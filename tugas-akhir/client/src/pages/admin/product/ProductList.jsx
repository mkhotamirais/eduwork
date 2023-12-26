import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Tags";
import { deleteProduct, selectAllProducts } from "../../../features/productsSlice";
import { imgProducts } from "../../../../envcaller";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const OnDeleteProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <table id={"tableProduct"} className="w-full">
      <thead>
        <tr className="border-b-2 border-slate-500 text-left">
          <th>No</th>
          <th className="w-1/6">Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>description</th>
          <th>category</th>
          <th>tags</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <tr key={product._id} className="border-b-2 border-slate-300">
            <td>{i + 1}</td>
            <td>
              <img src={imgProducts + "/" + product.image} alt="imageProduct" className="rounded w-1/2" />
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category.name}</td>
            <td>
              {product.tags.map((tag) => (
                <span key={tag._id}>{tag.name}</span>
              ))}
            </td>
            <td>
              <Link to={`/user/address/${product._id}`}>
                <Button className={"bg-green-500"}>
                  <FaEdit />
                </Button>
              </Link>
              <Button className={"bg-rose-500"} onClick={() => OnDeleteProduct(product._id)}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
