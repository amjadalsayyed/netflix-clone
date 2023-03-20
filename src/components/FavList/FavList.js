import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import FavMovieList from "../FavmovieList/FavMovieList";
import "./favList.css";

const url = `${process.env.REACT_APP_SERVER_URL}/getMovie`;

export default function FavList() {
  const [favArr, setFavArr] = useState([]);

  const fetchData = async () => {
    const { data } = await axios(url);
    setFavArr(data);
  };
  useEffect(() => {
    fetchData();
  }, [favArr]);

  let style1 = {};
  if (favArr.length <= 4) {
    style1 = { height: "100vh" };
  }

  return (
    <Container className="cardContainer" style={style1}>
      {favArr.length === 0 ? (
        <div>
          <h2>You didn't add any favorite Movie yet .</h2>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} xl={4} className="g-4">
          {favArr.map((movie) => {
            return <FavMovieList movie={movie} key={movie.id} />;
          })}
        </Row>
      )}
    </Container>
  );
}
