// The VideoList component doesn't utilize state. 
// It doesn't have any user interaction or re-renders itself. 
// So it remains a functional component. 

import React from "react";
import VideoListItem from "./video_list_item";

// Props are class component state properties being pass in to
// this functional class. For example, VideoList's parent component 
// called App passes its Videos state property to VideoList whenever 
// its constructor runs. State properties are called props. 

// In functional components, props are pass in as arguments. 

// In class components, props are available in any method we define
// and can be used as this.props. 
const VideoList = (props) => {
	// Fat arrow notation is used with the usual .map method for conciseness.
	// For every video object in the passed in props videos array from App component,
	// return a VideoListItem component and assign said video object to the
	// component's video attribute. After map finishes, assign the result to a 
	// constant called videoItems.
	const videoItems = props.videos.map((video) => {
		return <VideoListItem video={video} />;
	});

	// React is smart enough to know that videoItems is an array and will try to 
	// display each item within the ul.
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;























