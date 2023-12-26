import { useDispatch } from "react-redux";
import { Button, H3, Input, Label } from "../../../components/Tags";
import { useState } from "react";
import { addCategory } from "../../../features/categoriesSlice";

const CategoryAddForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const onAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory({ name }));
  };
  return (
    <form onSubmit={onAddCategory} className="mt-3">
      <H3>Add Category</H3>
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

export default CategoryAddForm;
