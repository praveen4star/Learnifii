import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useStyles } from "../../assests/style";
import CommentIcon from "@material-ui/icons/Comment";

import { likePost } from "../../Action/actionType";
import { useDispatch } from "react-redux";

const CardFooterAction = ({ likes, id, token, username }) => {
  const classes = useStyles();

  const [isLikeAction, setisLikeAction] = useState("");
  const [isLikeId, setisLikeId] = useState(id);
  const dispatch = useDispatch();
  const actionStyle = {
    color: isLikeAction,
  };

  useEffect(() => {
    setisLikeId(id);

    const isLidePost = likes.filter((like) => like.userId === username);
    isLidePost[0] ? setisLikeAction("red") : setisLikeAction("gray");
  }, [id, username]);

  const handleAction = () => {
    if (isLikeAction === "gray") {
      setisLikeAction("red");
    } else {
      setisLikeAction("gray");
    }

    const data = { id: isLikeId };
    console.log(data);
    dispatch(likePost({ data: data, token: token }));
  };
  return (
    <div>
      <IconButton onClick={handleAction}>
        <FavoriteIcon style={actionStyle} />
      </IconButton>
      {/* {post.like ? <label>{post.like.length + " Likes"}</label> : null} */}
      <IconButton aria-label="comment">
        <CommentIcon />
      </IconButton>
      {/* {post.commentSection ? (
        <label>{post.commentSection.length + " comment"}</label>
      ) : null} */}
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* {post.noumberOfShare ? (
        <label>{post.noumberOfShare + " Shares"}</label>
      ) : null} */}
    </div>
  );
};

export default CardFooterAction;