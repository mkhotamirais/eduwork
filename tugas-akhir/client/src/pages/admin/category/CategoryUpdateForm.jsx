import { useDispatch, useSelector } from "react-redux";
import { Button, H3, Input, Label } from "../../../components/Tags";
import { useEffect, useState } from "react";
import { selectCategoryById, updateCategory } from "../../../features/categoriesSlice";
import { Link, useParams } from "react-router-dom";

const CategoryUpdateForm = () => {
  const { id } = useParams();
  const category = useSelector((state) => selectCategoryById(state, id));
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (id && category) {
      setName(category.name);
    }
  }, [id, category]);

  const onAddCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategory({ name, id }));
    setName("");
  };
  return (
    <form onSubmit={onAddCategory} className="mt-3">
      <H3>Update Category</H3>
      <div className="mb-2">
        <Label id="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button type="submit" disabled={!name}>
        Update
      </Button>
      <Link to={`/admin/category`}>
        <Button className={"bg-slate-500 ml-2"}>Back</Button>
      </Link>
    </form>
  );
};

export default CategoryUpdateForm;
