import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

export default function ModalFavMovie({ onHide, show, movie }) {
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
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          style={{ height: "25rem", width: "18rem" }}
        />
        <div>
          <h5>Overview :</h5>
          <p>{movie.overview}</p>
          <h5>Release Date :</h5>
          <p>
            {movie.release_date === "undefined"
              ? "release date have not yet been made public yet"
              : movie.release_date}
          </p>
          <h5>Your Comment :</h5>
          <p> {movie.comment}</p>
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
