import { useState } from "react";

const ProductTag = ({ className, tag, onClick }) => {
  const [selectTag, setSelectTag] = useState(false);
  function handleTag() {
    setSelectTag(!selectTag);
    onClick();
  }
  return (
    <button
      onClick={handleTag}
      className={`${
        selectTag ? "bg-blue-500" : "bg-gray-500"
      } hover:bg-blue-500 rounded text-xs text-white mr-1 px-1 capitalize cursor-pointer ${className}`}
    >
      {tag.name}
    </button>
  );
};
ProductTag.propTypes;

export default ProductTag;
