import { useState } from "react";
import Btn from "../../components/Btn";
import TopTitle from "../../components/TopTitle";
import { Link } from "react-router-dom";

const Keranjang = () => {
  const [qty, setQty] = useState(1);
  const plusQty = () => {
    setQty((q) => q + 1);
  };
  const minusQty = () => {
    qty == 0 ? setQty(0) : setQty((q) => q - 1);
  };
  return (
    <TopTitle title="Keranjang Belanja">
      <div className="p-3">
        <h1 className="text-2xl font-semibold">Total Price: Rp10.000</h1>
        <table className="w-full my-5 leading-loose table-auto">
          <thead className="text-left border-b-2 border-b-slate-600">
            <tr>
              <th>Gambar</th>
              <th>Barang</th>
              <th>Harga</th>
              <th className="text-center w-32">Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b odd:bg-slate-100">
              <td>Gbr</td>
              <td>Gbr</td>
              <td>Gbr</td>
              <td className="text-center">
                <Btn className={"py-1 px-2 rounded"} onClick={minusQty}>
                  -
                </Btn>
                <span className="mx-3">{qty}</span>
                <Btn className={"py-1 px-2 rounded"} onClick={plusQty}>
                  +
                </Btn>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/checkout">
          <Btn className={"p-3 rounded"}>Checkout</Btn>
        </Link>
      </div>
    </TopTitle>
  );
};

export default Keranjang;
