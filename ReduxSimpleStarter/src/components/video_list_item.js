// VideoListItem will comprise and render 
// on the VideoList component. 

import React from "react";

// The props being passed in to VideoListItem is a singular video 
// from VideoList component. 
const VideoListItem = ({video}) => {
	// const video = props.video;
	// Using {video} as argument instead of props is ES6 syntax that says 
	// there's a props argument with a property of video. Capture that 
	// props.video property and assign it to a variable. Because {video} 
	// does all that, the const video line isn't needed. 

  const imageUrl = video.snippet.thumbnails.default.url;

  // We captured the image url, assigned it to a variable and placed it
  // in our img JSX element as an src attribute. It should display as a
  // thumbnail. Instead of declaring and assigning the retrieved property 
  // in a variable, we can simply insert it directly by using {video.snippet.title}.
	return (
		<li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
	);
};

export default VideoListItem;









