import { useDispatch, useSelector } from "react-redux";
import {
  categorySelectors,
  getCategories,
} from "../../../features/categorySlice.js";
import { useEffect, useState } from "react";
import { getProductCat } from "../../../features/productSlice.js";

const FilterCat = () => {
  const [category, setCategory] = useState("");
  const categories = useSelector(categorySelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCat(category));
  }, [dispatch, category]);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <select
      name="name"
      id="name"
      className="focus:outline-none capitalize cursor-pointer bg-inherit"
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
      }}
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
FilterCat.propTypes;

export default FilterCat;
