import { Counter } from "./Counter";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
export function Movie({
  name,
  poster,
  rating,
  summary,
  deleteButton,
  id,
  editButton,
}) {
  const [show, setShow] = useState(false);

  const history = useHistory();
  // const descriptionStyle = { display: show ? "block" : "none" };
  const styles = { color: rating >= 8.6 ? "teal" : "crimson" };
  return (
    <div className="card-container ">
      <img src={poster} alt={name} className="card-img-top" />
      <h3 className="movie-name">{name}</h3>
      <Counter />

      <div className="container">
        {" "}
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <div className="container">
            <Rating
              color="inherit"
              name="half-rating-read"
              defaultValue={rating}
              precision={0.2}
              max={10}
              readOnly
            />
            <p style={styles}>{rating}</p>
          </div>
        </Box>
      </div>

      <IconButton
        aria-label="delete"
        size="medium"
        onClick={() => history.push(`/movies/${id}`)}
      >
        <InfoIcon />
      </IconButton>
      <ArrowDropDownIcon
        fontSize="large"
        color="white"
        onClick={() => setShow(!show)}
      ></ArrowDropDownIcon>

      {/* conditional styling */}
      {/* <p style={descriptionStyle} className="movie-summery">
        {summary}
      </p> */}
      {/* conditional rendering */}
      {show ? <p className="movie-summery">{summary}</p> : ""}
      {deleteButton}
      {editButton}
    </div>
  );
}
