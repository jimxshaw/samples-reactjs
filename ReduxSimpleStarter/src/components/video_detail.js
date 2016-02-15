// The first question to ask when creating a component is:
// will the component maintain any kind of state? 
// VideoDetail will only ever care about the video's title,
// description and url. Those are properties available through 
// props as they're passed down from the App component. As such, 
// VideoDetail will not utilize state and so it will be a 
// functional component.   

import React from "react";

// We'll use ES6 syntax in this component too. Instead of using props by 
// capturing the props argument, we'll use the props object trick with {video}. 
const VideoDetail = ({video}) => {
  // Youtube embedded videos always have the same url format, it starts with the 
  // same https... string plus a videoId. The videoId can be extracted from the 
  // passed in props object {video} argument. ES6 syntax allows for string 
  // interpolation ${videoId}. Note that single ' or double " quotes cannot 
  // be used with this feature. A tick ` mark (same as tilde ~ key) must be used. 
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;



























