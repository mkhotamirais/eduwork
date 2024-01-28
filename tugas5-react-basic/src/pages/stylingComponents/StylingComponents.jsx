import CssInJsStyle from "./CssInJsStyle";
import ModuleStyle from "./ModuleStyle";
import PlainStyle from "./PlainStyle";
import Sass from "./Sass";

const StylingComponents = () => {
  return (
    <div>
      <PlainStyle />
      <Sass />
      <ModuleStyle />
      <CssInJsStyle />
    </div>
  );
};

export default StylingComponents;
