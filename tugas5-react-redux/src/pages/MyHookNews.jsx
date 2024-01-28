import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputSearch from "../components/InputSearch";
import { useEffect, useRef, useState } from "react";
import MyCard from "../components/MyCard";
import axios from "axios";

const MyHookNews = () => {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  let searchRef = useRef(null);

  function handleEnter(e) {
    if (e.key == "Enter") {
      showData();
    }
  }

  function handleClick() {
    showData();
  }

  function showData() {
    searchRef.current.innerHTML = "Wait....";
    setKey("");
    axios
      .get(
        `https://gnews.io/api/v4/${
          key == "" ? "top-headlines?" : "search?q=" + key
        }&lang=en&country=us&max=10&apikey=2cc9e0c2c593864b3b4556466634e8fd`
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => console.log(err))
      .finally(function () {
        searchRef.current.innerHTML = "Search";
      });
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <InputSearch
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onClick={() => handleClick()}
              onKeyUp={(e) => handleEnter(e)}
              ref={searchRef}
            />
          </Col>
        </Row>
        <Row>
          {data.map((item, i) => (
            <Col key={i}>
              <MyCard
                img={item.image}
                title={item.title}
                description={item.description}
                author={item.author}
                publishedAt={item.publishedAt}
                url={item.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyHookNews;
