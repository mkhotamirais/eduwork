import { useDispatch, useSelector } from "react-redux";
import { getProductTags, getProductsLimit8, productSelectors } from "../../features/productSlice";
import { useEffect, useState } from "react";
import { getTags, tagSelectors } from "../../features/tagsSlice";
import { tagsFilter, tagsPush } from "../../features/tagsSelectedSlice";

const TagsProduct = () => {
  let allTags = useSelector(tagSelectors.selectAll);
  // const dispatch = useDispatch();
  // const catSelected = useSelector((state) => state.catSelected);
  // useEffect(() => {
  //   dispatch(getTags(catSelected));
  // }, [dispatch, catSelected]);
  return (
    <div className="my-5">
      <span className="font-semibold">Tags: </span>
      {allTags.map(({ _id, name }) => (
        <TagBadge key={_id} name={name} />
      ))}
    </div>
  );
};

const TagBadge = ({ name }) => {
  // const productsTag = useSelector(productSelectors.selectAll);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  //   console.log(productsTag);
  // }, [dispatch]);
  // const [bg, setBg] = useState(false);
  // const tags = useSelector((state) => state.tagsSelected);
  // useEffect(() => {
  //   if (tags.tags.length > 0) {
  //     dispatch(getProductTags(tags.tags));
  //   } else {
  //     dispatch(getProductsLimit8());
  //   }
  // }, [dispatch, tags]);

  return (
    <span className={`text-white capitalize leading-5 px-2 rounded-full text-sm mr-1 cursor-pointer hover:bg-blue-500`}>
      {name}
    </span>
  );
};
TagBadge.propTypes;

export default TagsProduct;
