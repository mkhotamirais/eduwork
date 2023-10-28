import { useEffect, useState } from "react";

const accData = [
  {
    title: "title1",
    content: "content 1",
  },
  {
    title: "title2",
    content: "content 2",
  },
  {
    title: "title3",
    content: "content 3",
  },
];
const Accordion = () => {
  return (
    <div className="border">
      {accData.map(({ title, content }, i) => (
        <AccordionComp key={i} title={title} content={content} />
      ))}
    </div>
  );
};

const AccordionComp = ({ title }) => {
  const [buka, setBuka] = useState(false);

  return (
    <>
      <button
        onClick={() => setBuka(!buka)}
        className={`${buka ? "bg-blue-500" : "bg-green-500"}`}
      >
        {title}
      </button>
    </>
  );
};

export default Accordion;
