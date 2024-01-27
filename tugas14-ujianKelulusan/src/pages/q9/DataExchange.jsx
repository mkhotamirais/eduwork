import { H2 } from "../../components/Tags";

const DataExchange = () => {
  return (
    <section id="dataExchange">
      <H2>9. Sebutkan cara2 yang dapat digunakan agar antar component di react saling bertukar data</H2>
      <ul className="list-inside list-disc">
        <li>
          <b>props</b>: komponen menggunakan props untuk saling berkomunikasi
        </li>
        <li>useContext</li>
        <li>library, salah satunya Redux</li>
      </ul>
    </section>
  );
};

export default DataExchange;
