import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";
import LabelInput from "../../../components/LabelInput";

const TambahAlamat = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold mb-3">Tambah Alamat</h1>
      <form action="">
        <div className="flex gap-5">
          <div className="w-1/2">
            <LabelInput label="Nama" classInput={"w-full"} />
            <div className="mb-3">
              <label htmlFor="" className="block">
                Detail
              </label>
              <textarea
                name=""
                id=""
                className="w-full h-[11.95rem] border focus:outline-none"
              ></textarea>
            </div>
          </div>
          <div className="w-1/2">
            <LabelSelect label="Provinsi">
              <option value="">Jawa Barat</option>
            </LabelSelect>
            <LabelSelect label="Kabupaten">
              <option value="">Bandung Barat</option>
            </LabelSelect>
            <LabelSelect label="Kecamatan">
              <option value="">Sindangkerta</option>
            </LabelSelect>
            <LabelSelect label="Kelurahan">
              <option value="">Pasirpogor</option>
            </LabelSelect>
          </div>
        </div>
        <Btn className={"p-3 rounded"}>
          <Link to="../alamat">Simpan</Link>
        </Btn>
      </form>
    </div>
  );
};

const LabelSelect = ({ label, id, value, onChange, children }) => {
  return (
    <div className="mb-3">
      <label htmlFor="" className="block">
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full h-full p-[0.45rem] border"
      >
        {children}
      </select>
    </div>
  );
};
LabelSelect.propTypes;

export default TambahAlamat;
