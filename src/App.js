// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
// import { MovieList } from "./MovieList";
// import { Counter } from "./components/Counter";
import { MovieList } from "./components/MovieList";
import { Switch, Redirect, Route, Link, useParams } from "react-router-dom";
// import { AddColor } from "./components/AddColor";
import { useState } from "react";
import { Addmovie } from "./components/Addmovie";
import { AddColor } from "./components/AddColor";
import { Home } from "./components/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function App() {
  const INITIAL_STATE = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];
  const [movieList, setMovieList] = useState(INITIAL_STATE);
  return (
    <div className="App">
      <nav
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Link to="/home">Home</Link>
        <Link to="/films">Films</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movies/add">Add Movies</Link>
        <Link to="/color-box">Color Game</Link>
      </nav>

      <Switch>
        <Route path="/movies/add">
          <Addmovie movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail movies={movieList} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        {/* <Counter /> */}
        <Route path="/color-box">
          <AddColor />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function MovieDetail({ movies }) {
  console.log(movies);
  const { id } = useParams();
  const history = useHistory();
  const movie = movies[id];
  console.log(movie);
  return (
    <div className="container">
      <h3 className="movie-name">{movie.name}</h3>
      <div>
        <iframe
          width="876"
          height="364"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container">⭐{movie.rating}</div>

      <p>{movie.summary}</p>
      <Button
        variant="outlined"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        onClick={() => history.goForward()}
        startIcon={<ArrowForwardIcon />}
      >
        Forward
      </Button>
    </div>
    // {/* <h1>helo </h1> */}
  );
}

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <img
        className="image-responsive"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
      />
    </div>
  );
}
