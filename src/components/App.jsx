/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: window.exampleVideoData, 
      video: window.exampleVideoData[0],
    }
    this.handleVideoChange = this.handleVideoChange.bind(this);
  }
  handleVideoChange(prop) {
    this.setState({video: prop});
    // this.setState({videos: [prop].concat(this.state.slice(0, index).concat(this.state.slice(index+1))});
  }
  
  render() {
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
            <VideoList videos={this.state.videos} videochange={this.handleVideoChange} />
          </div>
        </div>
      </div>
    );
  }
}

// window.App = App;
