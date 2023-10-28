import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hilang } from "./features/useractionSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userBtn = document.getElementById("userBtn");
    window.addEventListener("click", function (e) {
      if (e.target.id != userBtn.id) {
        dispatch(hilang());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Header />
      {/* <Accordion3 /> */}
      <main className="min-h-screen px-3 md:px-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
