import React from "react";
import faker from "faker";
const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div classname="content">
        <a href="/" className="author">
          Yo mama
        </a>
        <div className="metadata">
          <span className="date">Today at 11:45 P.M.</span>
        </div>
        <div className="text">Your blog sucks</div>
      </div>
    </div>
  );
};
