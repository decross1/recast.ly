class App extends React.Component {
  constructor(props) {
    super(props), 
    this.state = {
      videos: window.exampleVideoData, 
      video: window.exampleVideoData[0]
    };
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.youTubeSearch = this.youTubeSearch.bind(this);
    this.handleYouTubeData = this.handleYouTubeData.bind(this);
  }

  componentDidMount() {
    window.searchYouTube({}, this.handleYouTubeData.bind(this));
  }

  handleVideoChange(prop) {
    this.setState({video: prop});
  }

  handleYouTubeData(data) {
    this.setState({videos: data.items, video: data.items[0]});
  }

  youTubeSearch(search) {
    searchYouTube({query: search}, this.handleYouTubeData);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              searchFunction={this.youTubeSearch}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer 
              video={this.state.video}/>
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