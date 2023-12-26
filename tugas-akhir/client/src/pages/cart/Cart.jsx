import { H1 } from "../../components/Tags";

const Cart = () => {
  return (
    <section>
      <H1>Keranjang Belanja</H1>
      <ul className="bg-white">
        <li className="flex justify-between">
          <div>
            <figure>gambar</figure>
            <h2>barang</h2>
          </div>
          <div>
            <p>qty</p>
            <p>harga</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cart;
