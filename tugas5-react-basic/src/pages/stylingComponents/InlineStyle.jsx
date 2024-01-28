const InlineStyle = () => {
  const style = {
    color: "rgb(50, 100, 200)",
    border: "1px solid",
    padding: "5px",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: "1rem",
  };
  return <div style={style}>Teks ini dihias dengan inline css</div>;
};

export default InlineStyle;
