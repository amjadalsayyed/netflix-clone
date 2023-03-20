import React from "react";
import FavMovie from "../favmovie/FavMovie";
import { useState } from "react";
import ModalFavMovie from "../ModalFavMovie/ModalFavMovie";
import ModalUpdateMovie from "../modalUpdateMovie/ModalUpdateMovie";
import ModalDeleteMovie from "../ModalDeleteMovie/ModalDeleteMovie";

export default function FavMovieList({ movie, setFavArr }) {
  const [clickedMovie, setClickedMovie] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [modalUpdateShow, setModalUpdateShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  return (
    <>
      <FavMovie
        movie={movie}
        setClickedMovie={setClickedMovie}
        setModalShow={setModalShow}
        setModalUpdateShow={setModalUpdateShow}
        setModalDeleteShow={setModalDeleteShow}
      />
      <ModalFavMovie
        movie={clickedMovie}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ModalUpdateMovie
        movie={clickedMovie}
        show={modalUpdateShow}
        onHide={() => setModalUpdateShow(false)}
      />
      <ModalDeleteMovie
        movie={clickedMovie}
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
      />
    </>
  );
}
