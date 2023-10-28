const acc3list = [
  {
    title: "acc1",
    content: "content1",
  },
  {
    title: "acc2",
    content: "content2",
  },
  {
    title: "acc3",
    content: "content3",
  },
];

const Accordion3 = () => {
  return (
    <div className="border">
      {acc3list.map((item, i) => (
        <div key={i}>
          <button>{item.title}</button>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion3;
