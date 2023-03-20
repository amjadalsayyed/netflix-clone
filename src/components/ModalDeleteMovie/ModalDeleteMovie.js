import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function ModalDeleteMovie({ onHide, show, movie, setFavArr }) {
  const url = `${process.env.REACT_APP_SERVER_URL}/deleteMovie/${movie.id}`;
  const deleteMovie = async () => {
    const { data } = await axios.delete(url);
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
        className="modal-body"
        style={{ backgroundColor: "rgb(128, 167, 167)" }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          style={{ height: "25rem", width: "18rem" }}
        />
        <div>
          <h2 style={{ color: "red" }}>Warning</h2>
          <h5>Are you sure you want to delete this movie : </h5>
          <h5 style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {movie.title}
          </h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "rgb(56, 75, 75)" }} onClick={onHide}>
          No, Keep it
        </Button>
        <Button variant="danger" onClick={deleteMovie}>
          Yes, i'm sure
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
