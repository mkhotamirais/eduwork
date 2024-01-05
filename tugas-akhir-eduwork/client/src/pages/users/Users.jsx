import { useEffect } from "react";
import { H2 } from "../../components/Tags";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, getMe, getToken } from "../../features/authSlice";

const Users = () => {
  const token = useSelector(getToken);
  const me = useSelector(getMe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMe(token));
  }, [dispatch, token]);
  return (
    <section className="bg-white p-3 rounded mt-2">
      <H2>Profil</H2>
      <table className="mt-3">
        <tbody>
          <tr>
            <td>Customer Id</td>
            <td className="pl-8">:</td>
            <td>{me.customer_id}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td className="pl-8">:</td>
            <td>{me ? me.username : null}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td className="pl-8">:</td>
            <td>{me ? me.email : null}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Users;
