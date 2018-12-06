import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
