import { Link } from "react-router-dom";
import MyBox from "../../layouts/MyBox";

const Checkout = () => {
  return (
    <MyBox title="Checkout">
      <div className="p-5">
        <h1>Konfirmasi</h1>
        <table className="w-full">
          <tr>
            <td>Alamat</td>
            <td>Alamat</td>
          </tr>
          <tr>
            <td>Sub Total</td>
            <td>Sub Total</td>
          </tr>
          <tr>
            <td>Ongkir</td>
            <td>Ongkir</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Total</td>
          </tr>
        </table>
        <div className="flex justify-between">
          <Link to="/keranjang" className="bg-red-400 text-white p-2">
            Sebelumnya
          </Link>
          <Link to="/invoice" className="bg-blue-400 text-white p-2">
            Bayar
          </Link>
        </div>
      </div>
    </MyBox>
  );
};

export default Checkout;
