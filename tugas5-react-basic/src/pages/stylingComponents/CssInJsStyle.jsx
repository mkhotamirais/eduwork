import styled from "styled-components";

const Tombol = styled.div`
  color: green;
  text-align: center;
  &:hover {
    color: blue;
  }
`;

const CssInJsStyle = () => {
  return <Tombol>teks ini dihias menggunakan CssInJs</Tombol>;
};

export default CssInJsStyle;
