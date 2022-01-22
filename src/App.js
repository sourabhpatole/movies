// import logo from "./logo.svg";
import "./App.css";
// import { MovieList } from "./MovieList";
// import { Counter } from "./components/Counter";
import { MovieList } from "./components/MovieList";
// import { AddColor } from "./components/AddColor";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div>
      <div className="App">
        <input
          className="form-label my-3"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a name"
        />
        <input
          className="form-label my-3"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter a poster"
        />
        <input
          className="form-label my-3"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter a rating"
        />
        <input
          className="form-label my-3"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter a summery"
        />
        <input
          className="form-label my-3"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          placeholder="Enter a trailer"
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          // console.log({
          //   name: name,
          //   poster: poster,
          //   rating: rating,
          //   summary: summary,
          //   trailer: trailer,
          // });
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          setMovieList([...movieList, newMovie]);
        }}
      >
        Add Movie
      </button>
      <MovieList movies={movieList} />
      <AddColor />
      {/* <Counter /> */}
    </div>
  );
}
function AddColor() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  // const colorList = ["red", "blue", "yellow"];
  const [colorList, setColorList] = useState(["red", "blue", "yellow"]);
  return (
    <div className="mb-3 my-3">
      <input
        className="form-label my-3"
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color"
      />
      <button
        className="btn btn-primary"
        onClick={() => setColorList([...colorList, color])}
      >
        Add color
      </button>
      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}
function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "205px",
    background: clr,
    margin: "10px",
  };
  return <div className="form-label my-3 mb-3 " style={styles}></div>;
}
