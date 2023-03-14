import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import "./MovieList.css";
import Movie from "../Movie/Movie";

export default function MovieList({ movie }) {
  const [clickedMovie, setClickedMovie] = useState({});
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Movie
        movie={movie}
        setClickedMovie={setClickedMovie}
        setModalShow={setModalShow}
      />

      <ModalMovie
        movie={clickedMovie}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
