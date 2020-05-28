import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from "../config/youtube.js";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      videos: exampleVideoData,
      currentPlaying: exampleVideoData[0],
      request: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.search = this.search.bind(this);
  }
  handleClick(index) {
    this.setState ({
      currentPlaying: exampleVideoData[index]
    });
  }
  searchState(videos) {
    this.setState ({
      videos: videos,
      currentPlaying: videos[0]
    });
  }

  search(apiKey, request) {
    var options = {
      key: apiKey,
      query: request,
      max: 5
    };
    searchYouTube(options, (data) => (this.searchState(data)));
  }
  componentDidMount() {
    this.search(YOUTUBE_API_KEY, "dogs");
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchFunction={this.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentPlaying}/>

          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickHandler={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
