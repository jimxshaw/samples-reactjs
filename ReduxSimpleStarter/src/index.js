// React is a javascript library that is used to produce html that's 
// shown to users in a web browser. When we write react code, we're 
// writing components or views (the two terms can be used interchangeably).
// Components are snippets of code that produce html. We write multiple 
// components and nest them inside one another so that complex applications 
// can be made simple. 

// Javascript modules capture the idea that all the code we write in separate 
// files are siloed from other code we write or from code that get installed through 
// libraries in our project. Code in other files will have zero contact with the 
// code in this file unless access is explicitly granted. Module access is granted 
// by using the import statement.

// Find the library called react installed in my application as a dependency
// (./node_modules/react) and assign it to a variable called React.
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// A path has to be specified for a code file that we write ourselves. If the file 
// is a .js file then we do not have to include the .js extension in the path. The 
// above react and react-dom do not need paths specified because they're npm 
// modules. There can only ever be one library called react or react-dom for example. 
import SearchBar from "./components/search_bar";

// This is a youtube api key from console.developers.google.com.
const API_KEY = "AIzaSyB2X1sr_tOIz8xWclj96qmEjWXKLYPpnw0";

// // Create a new component and it should produce html. The constant App class returns
// // some JSX that will be transpiled to html. The () => fat arrow ES6 notation is a 
// // terse way to write a function. Below is an example of a functional component.
// const App = () => {
//   return (
//   	<div>
//   		<SearchBar />
//   	</div>
//   );
// };

// The App component needs to be refactored from a functional component to a class 
// component. We do this so that the App can keep track of the list of retrieved 
// videos by recording them on its state.
class App extends Component {
	// Whenever the user search for more videos, the newly searched for videos 
	// need to be set on the state. State has to be initialized by the constructor.
	constructor(props) {
		super(props);

		this.state = {
      videos: [],
      selectedVideo: null
    };

		// // The constructor kicks off the youtube search api with a default search 
		// // term (vsauce in this case). The callback has the retrieved data and we 
		// // use that data to set the initial values of the state object properties. 
  //   // The callback function utilizes fat arrow notation. List of retrieved 
  //   // videos is assigned to state's videos array. State's selectedVideo will 
  //   // be the first video of the retrieved videos list. 
		// YTSearch({key: API_KEY, term: "vsauce"}, (videos) => {
		// 	this.setState({
  //       videos: videos,
  //       selectedVideo: videos[0]
  //     });
		// 	// Since the callback data is named the same as the state property name 
		// 	// (videos), the code can be simplified with below if we wanted.
		// 	// this.setState({videos});
		// });

    this.videoSearch("vsauce");
	}

  // For the SearchBar to work, we recycled YTSearch from our constructor and 
  // place it in a method called videoSearch that takes in a search term as argument.
  // Since we still want an initial search at App startup, we call videoSearch in 
  // the constructor with a default term of "vsauce".
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
     this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

	// VideoList is a child component of App but App needs to pass to VideoList its 
	// videos state property in order for VideoList to render the list. Passing data 
	// like this is called passing props in react. The App videos state property is a prop 
	// that's passed to VideoList. Whenever App re-renders, VideoList will get a new 
	// list of videos. The user's selected video will be passed into VideoDetail.
  // When VideoList calls onVideoSelect with a video, the selectedVideo on App will update.
  //  
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
				<VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
			</div>
		);
	}
}

// Take the component's generated html and put it on the page (in the DOM).
// We cannot simply pass App into .render() because that would be passing 
// in the class directly. Instead, we should be passing in AN INSTANCE of 
// that class. That's done using JSX syntax wrapped around App. The second 
// argument of .render() is a reference to an existing DOM node on the page.
// Essentially, when the App component gets rendered and produces html, put 
// it in the existing DOM element class called container.  
ReactDOM.render(<App/>, document.querySelector(".container"));































