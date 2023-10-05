import MyBox from "../../layouts/MyBox";

const Invoice = () => {
  return (
    <>
      <MyBox title="Invoice">
        <div className="p-5">
          <table className="w-full">
            <tr>
              <td>Status</td>
              <td>Status</td>
            </tr>
            <tr>
              <td>Order ID</td>
              <td>Order ID</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>Total Amount</td>
            </tr>
            <tr>
              <td>Billed to</td>
              <td>Billed to</td>
            </tr>
            <tr>
              <td>Payment to</td>
              <td>Payment to</td>
            </tr>
          </table>
        </div>
      </MyBox>
    </>
  );
};

export default Invoice;
