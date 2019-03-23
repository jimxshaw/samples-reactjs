import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Caution!</h4>
        <div>Are you sure?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 1:00PM" 
          avatar={faker.image.avatar()}
          content="Wonderful!!!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
        author="Thomas" 
        timeAgo="Today at 8:34AM" 
        avatar={faker.image.avatar()} 
        content="I have to agree" 
      />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
        author="Abe" 
        timeAgo="Yesterday at 12:12PM" 
        avatar={faker.image.avatar()} 
        content="Why is this here?" 
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
