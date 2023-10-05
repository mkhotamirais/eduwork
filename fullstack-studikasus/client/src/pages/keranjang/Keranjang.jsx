import { Link } from "react-router-dom";
import MyBox from "../../layouts/MyBox";

const Keranjang = () => {
  return (
    <MyBox title="Keranjang Belanja">
      <div className="p-5">
        <h1 className="text-2xl">
          Sub Total: <b className="font-semibold">4000</b>
        </h1>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b-2 border-b-slate-300">
              <th className="py-3">Gambar</th>
              <th>Barang</th>
              <th>Harga</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">gambar.jpg</td>
              <td>Buku</td>
              <td>5000</td>
              <td>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          to="/checkout"
          className="bg-blue-500 w-full text-white block text-center"
        >
          Checkout
        </Link>
      </div>
    </MyBox>
  );
};

export default Keranjang;
