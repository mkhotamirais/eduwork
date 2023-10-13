import { Link } from "react-router-dom";
import TopTitle from "../../components/TopTitle";
import Btn from "../../components/Btn";

const Checkout = () => {
  return (
    <TopTitle title="Checkout">
      <div className="p-3">
        <h1 className="text-xl font-semibold mb-5">Konfirmasi</h1>
        <table className="capitalize w-full table-auto leading-loose mb-5">
          <tr className="border-b">
            <td>alamat</td>
            <td>Kampung kecamatan kabupaten</td>
          </tr>
          <tr className="border-b">
            <td>sub total</td>
            <td>10000</td>
          </tr>
          <tr className="border-b">
            <td>ongkir</td>
            <td>5000</td>
          </tr>
          <tr className="border-b">
            <td>total</td>
            <td>15000</td>
          </tr>
        </table>
        <div className="flex justify-between">
          <Link to="/keranjang">
            <Btn className={"p-3 rounded bg-red-400"}>Back</Btn>
          </Link>
          <Link to="/invoices">
            <Btn className={"p-3 rounded bg-green-500"}>Bayar</Btn>
          </Link>
        </div>
      </div>
    </TopTitle>
  );
};

export default Checkout;
