import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../../features/categoriesSlice";
import { HideAddProduct, addProduct, getStatus } from "../../../features/productsSlice";
import { Button, H3, Input, Label, Select, Textarea } from "../../../components/Tags";

const ProductAddForm = ({ className = "hidden" }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);

  const status = useSelector(getStatus);
  const canSave = [name, price, description, category, image].every(Boolean);

  const categories = useSelector(selectAllCategories);

  const renderedCategories = categories.map((category) => (
    <option key={category._id} value={category.name}>
      {category.name}
    </option>
  ));

  const OnAddProduct = (e) => {
    e.preventDefault();
    console.log(image);
    const FormData = new FormData();
    FormData.append("image", image);
    console.log(FormData);
    // const data = { name, price, description, category, FormData };
    // dispatch(addProduct(data));
    // if (canSave) {
    //   try {
    //     const data = { name, price, description, category, image, tags };
    //     dispatch(addProduct(data));
    //     setName("");
    //     setPrice("");
    //     setDescription("");
    //     setCategory("");
    //     setImage("");
    //     setTags([]);
    //     dispatch(HideAddProduct());
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <section className={className}>
      <H3>Add New Address</H3>
      <form onSubmit={OnAddProduct} encType="multipart/form-data">
        <div className="mb-1">
          <Label id="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-1">
          <Label id="price">Price</Label>
          <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-1">
          <Label id="description">Description</Label>
          <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-1">
          <Label id="category">Category</Label>
          <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {renderedCategories}
          </Select>
        </div>
        <div className="mb-1">
          <Label id="image">Image</Label>
          <input type="file" id="image" name="uploaded_image" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <Button type="submit" disabled={!canSave}>
          {status === "loading" ? <span>Loading...</span> : <span>Add Product</span>}
        </Button>
        <Button className={"bg-slate-500 ml-2"} onClick={() => dispatch(HideAddProduct())}>
          Back
        </Button>
      </form>
    </section>
  );
};
ProductAddForm.propTypes;
export default ProductAddForm;
