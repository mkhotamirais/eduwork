import { useDispatch, useSelector } from "react-redux";
import { deleteTag, selectAllTags } from "../../../features/tagsSlice";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Tags";
import { FaEdit, FaTrash } from "react-icons/fa";

const TagsTable = () => {
  const tags = useSelector(selectAllTags);
  const dispatch = useDispatch();
  const onDeleteTag = (id) => {
    dispatch(deleteTag(id));
  };
  const renderedTags = tags.map((tag, i) => (
    <tr key={tag._id} className="border-b border-blue-300">
      <td>{i + 1}</td>
      <td>{tag.name}</td>
      <td>
        <Link to={`/admin/tags/${tag._id}`}>
          <Button>
            <FaEdit />
          </Button>
        </Link>
        <Button onClick={() => onDeleteTag(tag._id)} className={"bg-rose-500 ml-2"}>
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
          <th>Tags</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderedTags}</tbody>
    </table>
  );
};

export default TagsTable;
