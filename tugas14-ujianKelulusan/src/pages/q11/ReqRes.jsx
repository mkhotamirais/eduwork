import { H2 } from "../../components/Tags";

const ReqRes = () => {
  return (
    <section id="reqRes">
      <H2>11. Jelas alur request - response yang digunakan di express</H2>
      <ul className="list-inside list-disc">
        <li>siklus reqeust-response dimulai ketika user mengirim Request ke server</li>
        <li>express app akan menerima request sehingga menciptakan object req dan res</li>
        <li>lalu fungsi middleware dieksekusi sehingga dapat memanipulasi data sesuai kebutuhan</li>
        <li>urutan eksekusinya: express.json() - customMiddleware - Route handler</li>
      </ul>
    </section>
  );
};

export default ReqRes;
