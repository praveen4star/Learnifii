import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Action/actionType";
import Card from "../Card/Card";
import Skeleton from "@material-ui/lab/Skeleton";

import "./getPost.css";

function GetPost({ token, user, loading }) {
  const Posts = useSelector((state) => state.group.post);
  const data = useParams();
  const [state, setstate] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ data, token, user }));
  }, [data, loading]);

  const Post = Posts[0];

  useEffect(() => {
    if (Post) {
      setstate(Post.groupPost);
    }
  }, [Posts]);
  console.log(Post);
  // return <h1>jeje</h1>;
  return state[0] ? (
    <Card posts={state} token={token} user={user} />
  ) : (
    <div className="card-skeleton">
      <div className="profile-skeleton">
        <Skeleton variant="circle" height={60} width={60} />
        <div className="discreption-skeleton">
          <Skeleton variant="rect" height={20} width={250} />
          <Skeleton variant="rect" height={20} width={250} />
        </div>
      </div>
      <div className="image-skeleton">
        <Skeleton variant="rect" height={400} />
      </div>
      <div className="action-skeleton">
        <Skeleton variant="rect" width={100} height={30} />
        <Skeleton variant="rect" width={100} height={30} />
        <Skeleton variant="rect" width={100} height={30} />
      </div>
    </div>
  );
}

export default GetPost;