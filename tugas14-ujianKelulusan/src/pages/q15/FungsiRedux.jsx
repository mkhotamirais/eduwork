import { H2 } from "../../components/Tags";

const FungsiRedux = () => {
  return (
    <section id="fungsiRedux">
      <H2>15. Apa fungsi dari redux</H2>
      <ul className="list-inside list-disc">
        <li>
          Redux adalah wadah state yang dapat diprediksi untuk javascript app. Membantu menulis aplikasi yang prilakunya
          konsisten
        </li>
        <li>
          Fungsinya untuk mengelola state (state management) dengan mengumpulkannya di global state, controlnya terpusat,
          juga memisahkan antara logic dan view agar reusable. dibutuhkan saat aplikasi semakin besar dan kompleks
        </li>
        <li>modern web app direpresentasikan dengan pohon komponen kompleks yang membagi dan membuat data</li>
      </ul>
    </section>
  );
};

export default FungsiRedux;
