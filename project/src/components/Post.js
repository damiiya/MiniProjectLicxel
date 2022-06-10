import React from "react";
import "../style/Post.css";
import Avatar from "@mui/material/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar
          className="postAvatar"
          alt="username"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="postImage"
        src="https://images.unsplash.com/photo-1653463174231-3911539cfdd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <h4 className="postTitle">this is title</h4>
    </div>
  );
}

export default Post;
