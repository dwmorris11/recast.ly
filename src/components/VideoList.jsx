var VideoList = (props) => { //pomander did not like the arrow function here so i took it out to push...
  var elements = props.videos;

  return elements.map((value, index) => {(
    <div className="video-list">
     <div><h5><em>{elements.snippet.title}</em><img src={elements.thumbnails.default}/></h5></div>
    </div>
  )});
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


//{elements.map((value, index) => {
  //           return <li style={style} onClick={this.onListItemClick.bind(this)} key={index}>{value}</li>
  //         })}
