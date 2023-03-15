import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function FavMovie(props) {
  return (
    <Col>
      <Card
        style={{
          width: "18rem",
        }}
        className="text-center"
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
          style={{
            height: "25rem",
          }}
        />
        <Card.Body
          style={{
            height: "14rem",
            backgroundColor: "rgb(128, 167, 167)",
          }}
        >
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{`${props.movie.overview.substring(0, 90)}...`}</Card.Text>
          <Button
            style={{
              backgroundColor: "rgb(56, 75, 75)",
            }}
            variant="primary"
            onClick={() => {
              props.setClickedMovie(props.movie);
              props.setModalShow(true);
            }}
          >
            Show More
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(56, 75, 75)",
            }}
            variant="success"
            onClick={() => {
              props.setClickedMovie(props.movie);
              props.setModalUpdateShow(true);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              props.setClickedMovie(props.movie);
              props.setModalDeleteShow(true);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
