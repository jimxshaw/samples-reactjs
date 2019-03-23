import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 1:00PM" 
        avatar={faker.image.avatar()}
        content="Wonderful!!!" 
      />
      <CommentDetail 
        author="Thomas" 
        timeAgo="Today at 8:34AM" 
        avatar={faker.image.avatar()} 
        content="I have to agree" 
      />
      <CommentDetail 
        author="Abe" 
        timeAgo="Yesterday at 12:12PM" 
        avatar={faker.image.avatar()} 
        content="Why is this here?" 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
