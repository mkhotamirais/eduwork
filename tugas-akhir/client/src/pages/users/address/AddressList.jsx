import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../../../components/Tags";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../../features/addressSlice";
import { Link } from "react-router-dom";

const AddressList = ({ address }) => {
  const dispatch = useDispatch();

  const OnDeleteAddress = () => {
    dispatch(deleteAddress({ id: address._id }));
  };

  return (
    <ul>
      <li className="border-b grid grid-cols-10">
        <div className="col-span-8 leading-relaxed p-2">
          <i className="font-medium">{address.name} </i>
          {address.detail} Kel. {address.kelurahan} Kec. {address.kecamatan} Kab. {address.kabupaten} Provinsi{" "}
          {address.provinsi}
        </div>
        <div className="col-span-2 border-l flex flex-col sm:flex-row justify-center items-center gap-1 md:gap-3 p-2">
          <Link to={`/user/address/${address._id}`}>
            <Button className={"bg-green-500"}>
              <FaEdit />
            </Button>
          </Link>
          <Button className={"bg-rose-500"} onClick={OnDeleteAddress}>
            <FaTrash />
          </Button>
        </div>
      </li>
    </ul>
  );
};
AddressList.propTypes;

export default AddressList;
