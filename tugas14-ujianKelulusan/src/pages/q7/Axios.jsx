import { H2 } from "../../components/Tags";

const Axios = () => {
  return (
    <section id="axios">
      <H2>7. Apa fungsi axios</H2>
      <ul className="list-inside list-disc">
        <li>Axios merupakan library opensource yang digunakan untuk request data melalui http</li>
        <li>
          axios adalah promise-based http client for node.js and the browser. Isomorphic dapat berjalan di browser dan nodejs
          dengan codebase yang sama. Fungsinya, di server menggunakan native node.js http module, di client menggunakan
          XMLHttpRequest, intersep dan transformasi request dan response, cancel request
        </li>
      </ul>
    </section>
  );
};

export default Axios;
