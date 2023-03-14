import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./home.css";

const url = "https://movies-library-production-9d90.up.railway.app/trending";
export default function Home() {
  const [dataArr, setDataArr] = useState([]);
  const fetchData = async () => {
    const { data } = await axios(url);
    setDataArr(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="cardsContainer ">
      <Row xs={1} sm={2} md={3} xl={4} className="g-4">
        {dataArr.map((movie) => {
          return <MovieList movie={movie} key={movie.id} />;
        })}
      </Row>
    </Container>
  );
}
