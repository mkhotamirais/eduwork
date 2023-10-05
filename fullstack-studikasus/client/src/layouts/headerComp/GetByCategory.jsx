import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory } from "../../features/productSlice";
import { categorySelector, getCategories } from "../../features/categorySlice";

const GetByCategory = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector(categorySelector.selectAll);
  useEffect(() => {
    dispatch(getProductCategory(category));
    dispatch(getCategories());
  }, [dispatch, category]);
  return (
    <select
      name="categoriy"
      id="category"
      className="capitalize bg-inherit"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">all category</option>
      {categories.map((c) => (
        <option key={c._id} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default GetByCategory;
