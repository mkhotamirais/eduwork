import { useDispatch, useSelector } from "react-redux";
import { Button, H1 } from "../../components/Tags";
import { addToCart, decCartQty, deleteCart, getCartQty, selectAllCarts, updateCart } from "../../features/cartSlice";
import { imgProducts } from "../../../envcaller";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const carts = useSelector(selectAllCarts);
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState();
  const items = [];
  carts.map((cart) => items.push(cart));

  useEffect(() => {
    const total = carts.reduce((a, b) => a + b.price, 0);
    setTotalCart(total);
  }, [carts]);

  const onIncQty = (id) => {
    dispatch(getCartQty());
    dispatch(addToCart({ id }));
  };

  const onDecQty = (id) => {
    dispatch(getCartQty());
    dispatch(decCartQty({ id }));
  };

  const onDeleteCart = (id) => {
    dispatch(deleteCart(id));
    dispatch(getCartQty());
  };

  const onCheckout = () => {
    dispatch(updateCart({ items }));
  };
  return (
    <section>
      <H1>Keranjang Belanja</H1>
      <div className="bg-white p-3 rounded">
        <table className="w-full">
          <thead className="text-left border-b-2 border-slate-500">
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Barang</th>
              <th>Harga*qty</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, i) => (
              <tr key={cart._id} className="border-b-2 border-slate-300">
                <td>{i + 1}</td>
                <td className="w-auto sm:w-1/3">
                  <img src={imgProducts + "/" + cart.image} alt="imageProduct" className="rounded w-1/2" />
                </td>
                <td>{cart.name}</td>
                <td>Rp{cart.price.toLocaleString("id-ID")}</td>
                <td className="w-1/4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <button className="p-1 border rounded-full leading-none" onClick={() => onDecQty(cart.productId)}>
                        -
                      </button>
                      <span className="mx-1">{cart.qty}</span>
                      <button className="p-1 border rounded-full leading-none" onClick={() => onIncQty(cart.productId)}>
                        +
                      </button>
                    </div>
                    <button onClick={() => onDeleteCart(cart._id)} className="ml-5 text-rose-500">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-lg font-medium">
                Total Price
              </td>
              {totalCart ? (
                <td className="text-xl font-semibold italic">Rp{totalCart && totalCart.toLocaleString("id-ID")}</td>
              ) : null}
            </tr>
          </tbody>
        </table>
        {carts.length !== 0 && (
          <Link to="/products">
            <Button className={"my-2"} onClick={onCheckout}>
              Checkout
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Cart;
