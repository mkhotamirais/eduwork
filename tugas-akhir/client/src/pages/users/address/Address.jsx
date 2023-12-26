import { useDispatch, useSelector } from "react-redux";
import { Button, H2, H3 } from "../../../components/Tags";
import {
  GetIsShowAdd,
  GetIsShowUpdate,
  HideUpdateAddress,
  ShowAddAddress,
  selectAllAddresses,
} from "../../../features/addressSlice";
import AddressAddForm from "./AddressAddForm";
import AddressList from "./AddressList";
import AddressUpdateForm from "./AddressUpdateForm ";
import { Link } from "react-router-dom";

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAllAddresses);
  const showAdd = useSelector(GetIsShowAdd);
  const showUpdate = useSelector(GetIsShowUpdate);

  const onAddAddress = () => {
    dispatch(HideUpdateAddress());
    dispatch(ShowAddAddress());
  };

  return (
    <section className="bg-white p-3 rounded mt-2">
      <div className="flex justify-between items-center">
        <H2>Address</H2>
        <Link to="/user/address">
          <Button onClick={onAddAddress} className={showAdd ? "hidden" : "block"}>
            Add Address
          </Button>
        </Link>
      </div>
      <AddressAddForm className={showAdd ? "block" : "hidden"} />
      <AddressUpdateForm className={showUpdate ? "block" : "hidden"} />
      <br />
      <H3>Address List</H3>
      {addresses.map((address) => (
        <AddressList key={address._id} address={address} />
      ))}
    </section>
  );
};

export default Address;
