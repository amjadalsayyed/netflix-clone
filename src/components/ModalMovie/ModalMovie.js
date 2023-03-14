import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./modalMovie.css";
import { useState } from "react";
import axios from "axios";

const url = "https://movies-library-production-9d90.up.railway.app/addMovie";

export default function ModalMovie({ onHide, show, movie }) {
  const [comment, setComment] = useState("");

  const addToFav = async () => {
    const body = {
      title: movie.title.replaceAll("'", ""),
      release_date: movie.release_date,
      overview: movie.overview.replaceAll("'", ""),
      poster_path: movie.poster_path.replaceAll("'", ""),
      comment: comment.replaceAll("'", ""),
    };
    await axios.post(url, body);
    setComment("");
    onHide();
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="modal-body"
        style={{ backgroundColor: "rgb(128, 167, 167)" }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          style={{ height: "25rem", width: "18rem" }}
        />
        <div>
          <h5>Overview :</h5>
          <p>{movie.overview}</p>
          <InputGroup>
            <InputGroup.Text>Add Comment Here:</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="your comment is required !!! please add it here !!!"
            />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "rgb(56, 75, 75)" }} onClick={onHide}>
          Close
        </Button>
        <Button
          style={{ backgroundColor: "rgb(56, 75, 75)" }}
          onClick={addToFav}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
