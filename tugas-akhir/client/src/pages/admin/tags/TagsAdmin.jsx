import { useParams } from "react-router-dom";
import { H2, H3 } from "../../../components/Tags";
import TagsAddForm from "./TagsAddForm";
import TagsUpdateForm from "./TagsUpdateForm";
import TagsTable from "./TagsTable";

const TagsAdmin = () => {
  const { id } = useParams();
  return (
    <section>
      <H2>Tags</H2>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>{!id ? <TagsAddForm /> : <TagsUpdateForm />}</div>
        <div>
          <H3>Category List</H3>
          <TagsTable />
        </div>
      </div>
    </section>
  );
};

export default TagsAdmin;
