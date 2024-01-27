import { H2 } from "../../components/Tags";

const Hook = () => {
  return (
    <div>
      <H2>2. Jelaskan pengertian hook di react</H2>
      <ul className="list-inside list-disc">
        <li>
          Hook adalah cara agar functional component bisa akses state dan lifecycle yang dimiliki class component. Sebenarya
          Hook tidak punya lifecycle tapi punya side effect (efek samping). dengan efek samping itu kita bisa membuat seolah
          olah functional komponen itu bersifat seperti class component
        </li>
        <li>
          Manfaatnya, performa lebih cepat. Aturannya: hanya boleh dipanggi di top level function, harus dipanggil dari
          fungsi component / custom hook, tidak bisa dipakai di class component
        </li>
      </ul>
    </div>
  );
};

export default Hook;
