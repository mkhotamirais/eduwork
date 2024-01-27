import { H2 } from "../../components/Tags";

const FlexGridCondition = () => {
  return (
    <section id="flexGridCondition">
      <H2>10. Jelaskan kondisi yang mana style flex dan grid memungkinkan digunakan</H2>
      <ul className="list-inside list-disc">
        <li>
          flex: adalah model layout 1 dimensi (baris atau kolom) yang dapat mengatur jarak dan penjajaran antar item dalam
          sebuah kontainer.
        </li>
        <li>
          kondisi flex dimungkinkan jika terdapat container (parent) dan item-itemnya (child). ketika items diatur secara
          horizontal disebut main-axis. vertical cross-axis. lebar container main size. tingginya cross size. titik awal kiri
          itu main start. akhir kanan main end. titik awal atas cross start. titik akhir bawah cross end. Container inilah
          yang diberi display flex
        </li>
        <li>grid: adalah model layout berbentuk grid 2 dimensi (baris dan kolom)</li>
        <li>
          kondisi grid dimungkinkan jika terdapat container (parent) dan item-itemnya (child). container inilah yang diberi
          display grid
        </li>
      </ul>
    </section>
  );
};

export default FlexGridCondition;
