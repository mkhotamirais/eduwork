import { useDispatch, useSelector } from "react-redux";
import { getProductTags, productSelectors } from "../../features/productSlice";
import { useEffect, useState } from "react";
import { getTags, tagSelectors } from "../../features/tagsSlice";

const TagsProduct = () => {
  const products = useSelector(productSelectors.selectAll);
  const allTags = useSelector(tagSelectors.selectAll);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);
  const toggleTags = (e) => {
    let tagAdd = e.target.textContent;
    setTags([...tags, tagAdd]);
  };
  const allBgTags = [];
  const bgTags = (pt) => {
    allBgTags.push(pt.name);
    const concatTags = allBgTags.concat(tags);
    concatTags.filter((item, i) => {
      if (concatTags.indexOf(item) !== i) {
        return "bg-blue-500 text-black";
      } else {
        return "bg-slate-500 text-black";
      }
    });
  };
  useEffect(() => {
    if (tags.length) {
      dispatch(getProductTags(tags));
    }
  }, [dispatch, tags]);

  return (
    <div className="my-5">
      <span className="font-semibold">Tags: </span>
      {allTags.map((pt) => (
        <span
          key={pt._id}
          onClick={(e) => toggleTags(e)}
          className={`${bgTags(
            pt
          )} capitalize text-white leading-5 px-2 rounded-full text-sm mr-1 cursor-pointer hover:bg-blue-500`}
        >
          {pt.name}
        </span>
      ))}
    </div>
  );
};

export default TagsProduct;
