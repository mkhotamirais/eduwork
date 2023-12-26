import { useState } from "react";

const accordion2List = [
  {
    title: "acc1",
    content: "content acc1",
  },
  {
    title: "acc2",
    content: "content acc2",
  },
  {
    title: "acc3",
    content: "content acc3",
  },
];
const Accordion2 = () => {
  const [select, setSelect] = useState(null);
  return (
    <div className="border">
      {accordion2List.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => {
              if (select == i) {
                setSelect(null);
              } else {
                setSelect(i);
              }
            }}
          >
            {item.title}
          </button>
          <div className="transition-all duration-300">{select == i && item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion2;
