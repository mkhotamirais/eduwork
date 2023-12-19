import { categorySelectors, chooseCategory, getCategories } from "./categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductCategory = () => {
  const categories = useSelector(categorySelectors.selectAll);
  const choosedCategory = useSelector((s) => s.choosedCategory.category);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(chooseCategory(category));
  }, [dispatch, category, choosedCategory]);
  return (
    <div>
      <label htmlFor="" className="font-medium">
        Cateogory:{" "}
      </label>
      <select name="" id="" className="focus:outline-none capitalize" onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category.name} className="capitalize">
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductCategory;
