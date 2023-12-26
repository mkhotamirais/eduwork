import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, H3, Input, Label } from "../../../components/Tags";
import { addTag } from "../../../features/tagsSlice";

const TagsAddForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onAddCategory = (e) => {
    e.preventDefault();
    dispatch(addTag({ name }));
  };
  return (
    <form onSubmit={onAddCategory} className="mt-3">
      <H3>Add Tags</H3>
      <div className="mb-2">
        <Label id="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button type="submit" disabled={!name}>
        Add
      </Button>
    </form>
  );
};

export default TagsAddForm;
