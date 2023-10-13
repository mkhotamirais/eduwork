import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";

const Alamat = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold mb-3">Alamat</h1>
      <Btn className={"p-2 rounded"}>
        <Link to="../tambah-alamat">Tambah Alamat</Link>
      </Btn>
      <table className="mt-5">
        <thead className="w-1/4">
          <tr className="text-left border-b-2 border-b-slate-600">
            <th className="w-1/3">Nama</th>
            <th className="w-2/3">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-b-slate-400">
            <td>Ahmad</td>
            <td>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, omnis? Lorem ipsum dolor sit amet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Alamat;
