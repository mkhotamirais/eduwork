import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col    ">
        <h1>{error.data}</h1>
        <p className="font-semibold">
          {error.status} {error.statusText}
        </p>
      </div>
    </>
  );
}

export default ErrorBoundary;
