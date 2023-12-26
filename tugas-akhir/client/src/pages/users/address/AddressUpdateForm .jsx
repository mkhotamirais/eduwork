import { useEffect, useState } from "react";
import { Button, H3, Input, Label, Select, Textarea } from "../../../components/Tags";
import { useDispatch, useSelector } from "react-redux";
import {
  HideAddAddress,
  HideUpdateAddress,
  ShowUpdateAddress,
  addAddress,
  selectAddressById,
  updateAddress,
} from "../../../features/addressSlice";
import { AddressKabupaten, AddressKecamatan, AddressKelurahan, AddressProvinsi } from "./addressData";
import { Link, useParams } from "react-router-dom";

const AddressUpdateForm = ({ className = "hidden" }) => {
  const { id } = useParams();
  const address = useSelector((state) => selectAddressById(state, id));

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(ShowUpdateAddress());
      dispatch(HideAddAddress());
      if (address) {
        setName(address.name);
        setDetail(address.detail);
        setKelurahan(address.kelurahan);
        setKecamatan(address.kecamatan);
        setKabupaten(address.kabupaten);
        setProvinsi(address.provinsi);
      }
    }
  }, [id, dispatch, address]);

  const canSave = [name, detail, kelurahan, kecamatan, kabupaten, provinsi].every(Boolean);

  const renderedKelurahan = AddressKelurahan.map((kel, i) => (
    <option key={i} value={kel.name}>
      {kel.name}
    </option>
  ));

  const renderedKecamatan = AddressKecamatan.map((kec, i) => (
    <option key={i} value={kec.name}>
      {kec.name}
    </option>
  ));

  const renderedKabupaten = AddressKabupaten.map((kab, i) => (
    <option key={i} value={kab.name}>
      {kab.name}
    </option>
  ));

  const renderedProvinsi = AddressProvinsi.map((prov, i) => (
    <option key={i} value={prov.name}>
      {prov.name}
    </option>
  ));

  const OnUpdateAddress = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setLoading(true);
        const data = { name, detail, kelurahan, kecamatan, kabupaten, provinsi };
        dispatch(addAddress(data));
        dispatch(updateAddress());
        setName("");
        setDetail("");
        setKelurahan("");
        setKecamatan("");
        setKabupaten("");
        setProvinsi("");
        dispatch(HideAddAddress());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className={className}>
      <H3>Update Address</H3>
      <form onSubmit={OnUpdateAddress}>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
          <div>
            <div className="mb-1">
              <Label id="name">Nama</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-1">
              <Label id="detail">Detail</Label>
              <Textarea
                id="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className={"h-auto sm:h-44 lg:h-auto"}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-3">
            <div className="mb-1">
              <Label id="kelurahan">Kelurahan</Label>
              <Select id="kelurahan" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)}>
                {renderedKelurahan}
              </Select>
            </div>
            <div className="mb-1">
              <Label id="kecamatan">Kecamatan</Label>
              <Select id="kecamatan" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)}>
                {renderedKecamatan}
              </Select>
            </div>
            <div className="mb-1">
              <Label id="kabupaten">Kabupaten</Label>
              <Select id="kabupaten" value={kabupaten} onChange={(e) => setKabupaten(e.target.value)}>
                {renderedKabupaten}
              </Select>
            </div>
            <div className="mb-1">
              <Label id="provinsi">Provinsi</Label>
              <Select id="provinsi" value={provinsi} onChange={(e) => setProvinsi(e.target.value)}>
                {renderedProvinsi}
              </Select>
            </div>
          </div>
        </div>

        <Button type="submit" disabled={!canSave}>
          {loading ? <span>Loading...</span> : <span>Update Address</span>}
        </Button>
        <Link to="/user/address">
          <Button className={"bg-slate-500 ml-2"} onClick={() => dispatch(HideUpdateAddress())}>
            Back
          </Button>
        </Link>
      </form>
    </section>
  );
};
AddressUpdateForm.propTypes;

export default AddressUpdateForm;
