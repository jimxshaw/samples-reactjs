// The video list component doesn't utilize state. 
// It doesn't have any user interaction or re-renders itself. 
// So it remains a functional component. 

import React from "react";

// Props are class component state properties being pass in to
// this functional class. For example, VideoList's parent component 
// called App passes its Videos state property to VideoList whenever 
// its constructor runs. State properties are called props. 

// In functional components, props are pass in as arguments. 

// In class components, props are available in any method we define
// and can be used as this.props. 
const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
			{props.videos.length}
		</ul>
	);
};

export default VideoList;























