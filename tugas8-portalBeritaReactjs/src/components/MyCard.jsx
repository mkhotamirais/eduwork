import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard({ img, title, description, author, publishedAt, url }) {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} {publishedAt}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button href={url} target="blank">
          Lanjut Baca
        </Button>
      </Card.Body>
    </Card>
  );
}
MyCard.propTypes;

export default MyCard;
