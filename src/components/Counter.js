import { useState } from "react";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
export function Counter() {
  // const like = 5;
  const [like, setLike] = useState(0);
  const [dlike, setdLike] = useState(0);
  return (
    <div className="container">
      <Badge badgeContent={like} color="primary">
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          <ThumbUpIcon />
        </IconButton>
      </Badge>
      <Badge badgeContent={dlike} color="primary">
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => {
            setdLike(dlike - 1);
          }}
        >
          <ThumbDownIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
