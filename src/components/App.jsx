class App extends React.Component {
  constructor(props) {
    super(props), 
    // window.searchYouTube({}, this.handleYouTubeData.bind(this));
    this.state = {
      videos: window.exampleVideoData, 
      video: window.exampleVideoData[0]
    }
    this.handleVideoChange = this.handleVideoChange.bind(this);
    // this.props.searchYouTube({}, this.handleYouTubeData.bind(this))
  }

  componentDidMount() {
    window.searchYouTube({}, this.handleYouTubeData.bind(this));
  }

  handleVideoChange(prop) {
    this.setState({video: prop});
    // this.setState({videos: [prop].concat(this.state.slice(0, index).concat(this.state.slice(index+1))});
  }

  handleYouTubeData(data) {
    // console.log(data, this.state.videos);
    this.setState({videos: data.items, video: data.items[0]});
  }
  
  render() {
  if (this.state.videos === undefined) {
    <div></div>
  } 
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videos} 
              videochange={this.handleVideoChange} 
              />
          </div>
        </div>
      </div>
    );
  }
}

// window.App = App;
