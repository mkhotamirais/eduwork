import { useSelector } from "react-redux";
import { H3 } from "../../components/Tags";
import { Badge } from "../../components/Wrapper";
import { selectAllTags } from "../../features/tagsSlice";

const Tags = () => {
  const tags = useSelector(selectAllTags);

  return (
    <section className="bg-white my-2 rounded p-2">
      <div className="flex items-center">
        <H3>Tags: </H3>
        {tags.map((tag) => (
          <div key={tag._id} className="ml-2">
            <Badge>{tag.name}</Badge>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tags;
