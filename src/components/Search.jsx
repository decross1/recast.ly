class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleSearch() {
    this.props.searchFunction(this.state.value);
  }
  handleChange(e) { 
    this.setState({value: e.target.value}, () => {
      this.handleSearch();
    });
  }
  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" 
          onChange={this.handleChange}
          onKeyUp={this.handleKeyPress}
          />
        <button className="btn hidden-sm-down" 
          onClick={this.handleSearch}
          >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}