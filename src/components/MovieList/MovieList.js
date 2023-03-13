import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import "./MovieList.css";

export default function MovieList({ movie }) {
  const [clickedMovie, setClickedMovie] = useState({});
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            style={{ height: "25rem" }}
          />
          <Card.Body
            style={{ height: "14rem", backgroundColor: "rgb(128, 167, 167)" }}
          >
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{`${movie.overview.substring(0, 90)}...`}</Card.Text>
            <Button
              style={{ backgroundColor: "rgb(56, 75, 75)" }}
              variant="primary"
              onClick={() => {
                setClickedMovie(movie);
                setModalShow(true);
              }}
            >
              Add to favorite
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <ModalMovie
        movie={clickedMovie}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
