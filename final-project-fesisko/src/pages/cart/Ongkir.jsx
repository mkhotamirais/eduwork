import { useEffect, useState } from "react";
import CartFrom from "./CartFrom";
import CartTo from "./CartTo";
import { useDispatch, useSelector } from "react-redux";
import { fetchOngkir, getOngkir, getOrder, getWeight } from "../../features/cartsSlice";
import { Link, useNavigate } from "react-router-dom";
import { Label, Select } from "../../components/Tags";
import { submitOrder } from "../../features/orderSlice";

const Ongkir = () => {
  const dispatch = useDispatch();
  const weight = useSelector(getWeight);
  const ongkir = useSelector(getOngkir);
  const order = useSelector(getOrder);
  const [id, setId] = useState("");
  const [selectedOngkir, setSelectedOngkir] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (weight == 0) {
      navigate("/carts");
    }
  }, [weight, navigate]);

  useEffect(() => {
    if (destination) {
      dispatch(fetchOngkir({ id, destination, weight }));
    }
  }, [dispatch, destination, id, weight]);

  const onOrder = (e) => {
    e.preventDefault();
    dispatch(submitOrder(order));
  };

  //   [
  //     {
  //       product_id: 25136,
  //       product_name: "tas 3 varian 1",
  //       product_img: "https://demo.sistemtoko.com/img/user/demo/product/jakc1i-ovhycn-1-png-png.png",
  //       product_price: "50.000",
  //       product_qty: 1,
  //       product_weight: 100,
  //       product_stock: 96,
  //     },
  //     {
  //       product_id: 25133,
  //       product_name: "tas 1 ",
  //       product_img: "https://demo.sistemtoko.com/img/user/demo/product/kdkxol-mxnjcy-23-png-png.png",
  //       product_price: "100.000",
  //       product_qty: 1,
  //       product_weight: 100,
  //       product_stock: 83,
  //     },
  //   ];

  const resultOngkir =
    ongkir && ongkir.length > 0 ? (
      <>
        <div>
          <Label id="ongkir">Pilih Ongkir</Label>
          <Select id="ongkir" onChange={(e) => setSelectedOngkir(e.target.value)}>
            {ongkir.map((okr, i) => (
              <option key={i} value={okr.cost.value}>
                Rp{okr.cost[0].value.toLocaleString("id-ID")} - {okr.service} - {okr.description}
              </option>
            ))}
          </Select>
        </div>
        <div></div>
        <Link to={"../invoice"}>
          <button
            type="submit"
            disabled={!selectedOngkir}
            className="border bg-blue-500 text-white rounded p-2 hover:opacity-70 disabled:opacity-70"
          >
            Order
          </button>
        </Link>
      </>
    ) : (
      <p className="text-rose-500">Pelayanan belum tersedia</p>
    );

  return (
    <section className="py-3">
      <form onSubmit={onOrder} className="bg-white p-3 grid grid-cols-2 gap-3 rounded">
        <CartFrom setId={setId} />
        <CartTo setDestination={setDestination} />
        {destination && destination !== "--Select district--" ? <>{resultOngkir}</> : null}
      </form>
    </section>
  );
};

export default Ongkir;
