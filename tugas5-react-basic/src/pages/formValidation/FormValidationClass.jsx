import React from "react";
import Button from "../../components/Button";

class FormValidationClass extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "yes" : "no"}
    `);
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              className="border"
              defaultValue={this.state.nama}
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Jurusan</label>
            <select
              name="jurusan"
              id=""
              className="border"
              onChange={(e) => this.setState({ jurusan: e.target.value })}
            >
              <option value="">-- Pilih Jurusan --</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">
                Desain Komunikasi Visual
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="">Jenis Kelamin</label>
            <input
              type="radio"
              value="laki-laki"
              onChange={(e) => this.setState({ gender: e.target.value })}
            />
            Laki-laki
            <input
              type="radio"
              value="perempuan"
              onChange={(e) => this.setState({ gender: e.target.value })}
            />
            Perempuan
          </div>
          <div className="mb-3">
            <label htmlFor="">Alamat</label>
            <textarea
              name="alamat"
              id=""
              cols="30"
              rows="5"
              className="border"
              value={this.state.alamat}
              onChange={(e) => this.setState({ alamat: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Member</label>
            <input
              type="checkbox"
              value={this.state.member}
              className="border"
              onChange={(e) => this.setState({ member: e.target.checked })}
            />
          </div>
          <Button type="submit">send</Button>
        </form>
      </>
    );
  }
}

FormValidationClass.propTypes;

export default FormValidationClass;
