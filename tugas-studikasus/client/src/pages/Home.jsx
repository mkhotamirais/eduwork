import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlexCenter from "../components/FlexCenter";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  });
  return (
    <FlexCenter>
      <h1 className="text-5xl mb-6">Welcome</h1>
      <p className="text-2xl">Mkhotami POS</p>
    </FlexCenter>
  );
};

export default Home;
