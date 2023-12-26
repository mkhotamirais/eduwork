import { useParams } from "react-router-dom";
import { H2, H3 } from "../../../components/Tags";
import CategoryAddForm from "./CategoryAddForm";
import CategoryTable from "./CategoryTable";
import CategoryUpdateForm from "./CategoryUpdateForm";

const Category = () => {
  const { id } = useParams();
  return (
    <section>
      <H2>Category</H2>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>{!id ? <CategoryAddForm /> : <CategoryUpdateForm />}</div>
        <div>
          <H3>Category List</H3>
          <CategoryTable />
        </div>
      </div>
    </section>
  );
};

export default Category;
