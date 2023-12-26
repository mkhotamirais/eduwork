import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectTagsByid, updateTag } from "../../../features/tagsSlice";
import { useEffect, useState } from "react";
import { Button, H3, Input, Label } from "../../../components/Tags";

const TagsUpdateForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tag = useSelector((state) => selectTagsByid(state, id));
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(tag);
    console.log(id);
    if (id && tag) {
      setName(tag.name);
    }
  }, [id, tag]);
  const onAddTag = (e) => {
    e.preventDefault();
    dispatch(updateTag({ name, id }));
  };
  return (
    <form onSubmit={onAddTag} className="mt-3">
      <H3>Update Tag</H3>
      <div className="mb-2">
        <Label id="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button type="submit" disabled={!name}>
        Update
      </Button>
      <Link to={`/admin/tags`}>
        <Button className={"bg-slate-500 ml-2"}>Back</Button>
      </Link>
    </form>
  );
};

export default TagsUpdateForm;
