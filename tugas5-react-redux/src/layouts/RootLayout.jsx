import { Outlet } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";

const RootLayout = () => {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default RootLayout;
