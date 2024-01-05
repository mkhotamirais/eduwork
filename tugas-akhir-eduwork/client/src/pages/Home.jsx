import { H1, H2 } from "../components/Tags";

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white rounded p-10 text-center">
        <H2>Welcome</H2>
        <H1>User</H1>
        <H2>Eduwork POS</H2>
      </div>
    </section>
  );
};

export default Home;
