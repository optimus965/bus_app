import { useRouteError } from "react-router-dom";

function VansError() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error : {error.message}</h1>

      <h1>{error.statusText}</h1>
      <h1>{error.status}</h1>
    </div>
  );
}

export default VansError;
