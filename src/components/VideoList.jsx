import VideoListEntry from './VideoListEntry.js';
var VideoList = function (props) {
  var elements = props.videos;
  var output = elements.map((video, index) => (
    <VideoListEntry video={video} clickHandler={props.clickHandler} index={index}/>
  ));
  return output;
};
//   <div className="video-list" key={index}>
//   <div ><h5><em>{array[index].snippet.title}</em><img src={array[index].snippet.thumbnails.default.url}/></h5></div>
// </div>
// constructor(props) {
//   super(props);
//   this.state = {
//     done: false
//   };
// }

// render() {
//   var elements = this.props.videos;

//   var output = elements.map((value, index, array) => (
//   <div className="video-list" key={index}>
//     <div ><h5><em>{array[index].snippet.title}</em><img src={array[index].snippet.thumbnails.default.url}/></h5></div>
//   </div>
// ));
// return output;

//   }

// }



// var output = elements.map((value, index, array) => (
//   <div className="video-list" key={index}>
//     <div ><h5><em>{array[index].snippet.title}</em><img src={array[index].snippet.thumbnails.default.url}/></h5></div>
//   </div>
// ));
// return output;
//
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;