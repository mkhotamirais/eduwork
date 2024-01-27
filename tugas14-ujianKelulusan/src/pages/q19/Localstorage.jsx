import { H2 } from "../../components/Tags";

const Localstorage = () => {
  return (
    <section id="localstorage">
      <H2>
        19. Misalkan suatu web dengan fitur bisa memasukkan barang ke keranjang, apa cara yang dapat dilakukan ketika user
        pindah browser keranjang tetap terupdate spt terkahir kali diupdate
      </H2>
      <ul className="list-inside list-disc">
        <li>salah satu caranya adalah dimasukan ke localstorage</li>
      </ul>
    </section>
  );
};

export default Localstorage;
