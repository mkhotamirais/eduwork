import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, selectAllCategories } from "../../../features/categoriesSlice";
import { Button } from "../../../components/Tags";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryTable = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();

  const onDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const renderedCategories = categories.map((category, i) => (
    <tr key={category._id} className="border-b border-blue-300">
      <td>{i + 1}</td>
      <td>{category.name}</td>
      <td>
        <Link to={`/admin/category/${category._id}`}>
          <Button>
            <FaEdit />
          </Button>
        </Link>
        <Button onClick={() => onDeleteCategory(category._id)} className={"bg-rose-500 ml-2"}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  ));

  return (
    <table className="mt-3 w-full leading-loose">
      <thead>
        <tr className="border-separate border-b-2 border-blue-500 border-spacing-2 text-left">
          <th>No</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderedCategories}</tbody>
    </table>
  );
};
CategoryTable.propTypes;

export default CategoryTable;
