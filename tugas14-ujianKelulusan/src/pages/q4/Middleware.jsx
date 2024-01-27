import { H2 } from "../../components/Tags";

const Middleware = () => {
  return (
    <div>
      <H2>4. Apa yang anda ketahui tentang middleware di expresses</H2>
      <ul className="list-inside list-disc">
        <li>
          Pada dasarnya express adalah serangkaian fungsi middleware. fungsi middleware adalah fungsi yang mempunyai akses ke
          objek reqest, response dan fungsi middleware berikutnya dalam siklus request-response. Jadi middleware adalah
          fungsi yang berjalan di antara request dan response
        </li>
        <li>disebut middleware karena dieksekusi di tengah antara mengirim request dan menerima response</li>
        <li>Tipe middleware: application-level, router-level, error-handling, built-in, third-party</li>
      </ul>
    </div>
  );
};

export default Middleware;
