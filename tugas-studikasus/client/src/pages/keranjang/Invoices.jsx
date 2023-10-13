import { Link } from "react-router-dom";
import TopTitle from "../../components/TopTitle";
import Btn from "../../components/Btn";

const Invoices = () => {
  return (
    <TopTitle title="Invoices">
      <div className="p-3">
        <table className="w-full capitalize leading-loose mb-5">
          <tr className="border-b">
            <td>status</td>
            <td>waiting payment</td>
          </tr>
          <tr className="border-b">
            <td>order id</td>
            <td>#5</td>
          </tr>
          <tr className="border-b">
            <td>total amount</td>
            <td>15000</td>
          </tr>
          <tr className="border-b">
            <td>billed to</td>
            <td>ahmad panjang</td>
          </tr>
          <tr className="border-b">
            <td>payment to</td>
            <td>abdul pnajang</td>
          </tr>
        </table>
        <Link to="/account/pemesanan">
          <Btn className={"p-3 rounded"}>Lihat Pemesanan</Btn>
        </Link>
      </div>
    </TopTitle>
  );
};

export default Invoices;
