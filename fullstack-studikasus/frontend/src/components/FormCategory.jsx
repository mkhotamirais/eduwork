import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsCategory } from "../features/productSlice";

const FormCategory = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsCategory({ category }));
  }, [dispatch, category]);

  return (
    <>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          // dispatch(getProductsCategory({ category }));
        }}
      >
        <option value="">all category</option>
        <option value="food">food</option>
        <option value="drink">drink</option>
      </select>
    </>
  );
};

export default FormCategory;
