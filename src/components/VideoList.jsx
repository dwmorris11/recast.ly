var VideoList = (props) => { //pomander did not like the arrow function here so i took it out to push...
  var elements = props.videos;

  var output = elements.map((value, index, array) => (
    <div className="video-list" key={index}>
      <div ><h5><em>{array[index].snippet.title}</em><img src={array[index].snippet.thumbnails.default.url}/></h5></div>
    </div>
  ));
  return output;
};
//
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;