import React, { Fragment, useState, useEffect } from "react";
import { Button, Avatar, IconButton } from "@material-ui/core";

import { useStyles, StyledBadge } from "../../assests/style";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch } from "react-redux";
import { followRequest } from "../../Action/actionType";

const style = { height: "60px", width: "60px" };

function Follower({ users, userdata, token, id }) {
  const [State, setState] = useState("");
  const [GroupId, setGroupId] = useState(id);
  useEffect(() => {
    const isFollow = users.filter((user) => user.userId === userdata.email);
    console.log(isFollow);
    isFollow[0] ? setState("Unfollow") : setState("follow");
    setGroupId(id);
  }, [userdata, users, id]);

  const dispatch = useDispatch();

  const handleFollow = () => {
    const data = {
      id: GroupId,
    };
    dispatch(followRequest({ data: data, token: token }));
  };
  const classes = useStyles();
  return (
    <div className="follower-box">
      <p className="following-heading">Followers</p>
      <div className="avatar">
        <div className={classes.Avatar1}>
          {users.map((user, index) => (
            <Fragment key={index}>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar src={userdata.profile_image_url} style={style} />
              </StyledBadge>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="follow-button">
        <Button
          variant="contained"
          className={classes.root}
          onClick={handleFollow}
        >
          {State}
        </Button>
        <IconButton aria-label="delete" className={classes.margin}>
          <ShareIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Follower;