import "./App.css";
import React from "react";
import { MovieList } from "./components/MovieList";
import { Switch, Redirect, Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { Addmovie } from "./components/Addmovie";
import { AddColor } from "./components/AddColor";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { MovieDetail } from "./components/MovieDetail";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { Game } from "./components/Game";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { EditMovies } from "./components/EditMovies";
import { BasicForm } from "./components/BasicForm";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  // const colorMode = React.useContext(ColorModeContext);
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // const [movieList, setMovieList] = useState([]);
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/films")}>
                Films
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/movies/add")}
              >
                Add Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/color-box")}
              >
                Color Game
              </Button>
              <Button color="inherit" onClick={() => history.push("/game")}>
                Game
              </Button>
              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={
                  mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* <nav
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Link to="/home">Home</Link>
        <Link to="/films">Films</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movies/add">Add Movies</Link>
        <Link to="/color-box">Color Game</Link>
      </nav> */}
          <section className="route-container">
            <Switch>
              <Route path="/movies/add">
                <Addmovie />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovies />
              </Route>
              <Route path="/form">
                <BasicForm />
              </Route>
              <Route path="/movies/:id">
                <MovieDetail />
              </Route>
              <Route path="/movies">
                <MovieList />
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
              <Route path="/game">
                <Game />
              </Route>
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
