import YOUTUBE_API_KEY from "../config/youtube.js";
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = _.debounce(()=>(this.props.searchFunction(YOUTUBE_API_KEY, this.state.value)), 500);
  }
  handleChange(event) {
    this.setState ({
      value: event.target.value
    });
    this.emitChangeDebounced();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" value={this.state.value} onChange={this.handleChange} type="text" id="request"/>
        <button className="btn hidden-sm-down" onClick={()=>(this.props.searchFunction(YOUTUBE_API_KEY, this.state.value))}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
