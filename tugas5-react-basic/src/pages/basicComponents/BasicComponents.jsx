import CcBasic from "./CcBasic";
import FcBasic from "./FcBasic";

const BasicComponents = () => {
  return (
    <div>
      <h1 className="sub-title">Class Components</h1>
      <CcBasic nama="ahmad" umur="20" />
      <h1 className="sub-title">Functional Components</h1>
      <FcBasic nama="ahmad" umur="21" asal="bandung" />
    </div>
  );
};

export default BasicComponents;
