import { useRouteError } from "react-router-dom";
import FlexCenter from "../components/FlexCenter";

const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <FlexCenter>
      <h1 className="text-2xl mb-3">{error.data}</h1>
      <i className="text-xl font-semibold">
        {error.status} {error.statusText}
      </i>
    </FlexCenter>
  );
};

export default ErrorBoundary;
