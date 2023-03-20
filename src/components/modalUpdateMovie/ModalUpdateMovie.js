import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./modalUpdate.css";
import axios from "axios";

export default function ModalUpdateMovie({ onHide, show, movie, setFavArr }) {
  const url = `${process.env.REACT_APP_SERVER_URL}/updateMovie/${movie.id}`;
  const updateMovie = async (e) => {
    e.preventDefault();
    const body = {
      title: e.target.title.value.replaceAll("'", ""),
      release_date: e.target.release_date.value,
      overview: e.target.overview.value.replaceAll("'", ""),
      poster_path: e.target.poster_path.value.replaceAll("'", ""),
      comment: e.target.comment.value.replaceAll("'", ""),
    };
    const { data } = await axios.put(url, body);
    // setFavArr(data);
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
        className="modal-update"
        style={{ backgroundColor: "rgb(128, 167, 167)" }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          style={{ height: "25rem", width: "18rem" }}
        />
        <div className="form">
          <Form onSubmit={updateMovie}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                defaultValue={movie.title}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                name="release_date"
                type="text"
                defaultValue={
                  movie.release_date === "undefined"
                    ? "release date have not yet been made public yet"
                    : movie.release_date
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Overview</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="overview"
                type="text"
                defaultValue={movie.overview}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>poster path</Form.Label>
              <Form.Control
                name="poster_path"
                type="text"
                defaultValue={movie.poster_path}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                name="comment"
                type="text"
                defaultValue={movie.comment}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: "rgb(56, 75, 75)" }}
              type="submit"
            >
              Confirm Changes
            </Button>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "rgb(56, 75, 75)" }} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
