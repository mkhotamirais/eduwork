import { H2 } from "../../components/Tags";

const ErrorStatus = () => {
  return (
    <section id="errorStatus">
      <H2>18. Jelaskan jenis error http 409, 500 dan 401</H2>
      <ul className="list-inside list-disc">
        <li>401: unauthorized</li>
        <li>409: conflict</li>
        <li>500: internal server error</li>
      </ul>
    </section>
  );
};

export default ErrorStatus;
