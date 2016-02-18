// VideoListItem will comprise and render 
// on the VideoList component. 

import React from "react";

// The props being passed in to VideoListItem is a singular video 
// from VideoList component. 
const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video;
	// Using {video} as argument instead of props is ES6 syntax that says 
	// there's a props argument with a property of video. Capture that 
	// props.video property and assign it to a variable. Because {video} 
	// does all that, the const video line isn't needed.
  // The onVideoSelect is another property of props, which is passed down
  // to VideoListItem from VideoList. 

  const imageUrl = video.snippet.thumbnails.default.url;

  // We captured the image url, assigned it to a variable and placed it
  // in our img JSX element as an src attribute. It should display as a
  // thumbnail. Instead of declaring and assigning the retrieved property 
  // in a variable, we can simply insert it directly by using {video.snippet.title}.
  // The entire onVideoSelect function (which itself is part of props) passing 
  // chain sequence is this: App sets its state's selectedVideo property and passes 
  // onVideoSelect function to VideoList, which doesn't do anything with props, but 
  // instead passes onVideoSelect to VideoListItem. Whenever VideoListItem's JSX 
  // element is clicked, onVideoSelect function will run with that 
  // particular VideoListItem's video.  
	return (
		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
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









