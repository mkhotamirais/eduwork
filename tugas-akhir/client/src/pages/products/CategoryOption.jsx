import { useSelector } from "react-redux";
import { H3, Select } from "../../components/Tags";
import { selectAllCategories } from "../../features/categoriesSlice";
import { useState } from "react";

const Category = () => {
  const categories = useSelector(selectAllCategories);
  const [category, setCategory] = useState("");
  const renderedCategories = categories.map((category) => (
    <option key={category._id} value={category.name}>
      {category.name}
    </option>
  ));
  return (
    <section className="bg-white my-2 rounded p-2">
      <div className="flex items-center gap-2">
        <H3>Category: </H3>
        <Select className={"p-1"} id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {renderedCategories}
        </Select>
      </div>
    </section>
  );
};

export default Category;
