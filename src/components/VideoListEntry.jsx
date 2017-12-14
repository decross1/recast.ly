let VideoListEntry = (props) => {

 let onTitleClick = function(e) {
   props.handlevideochange(props.video);
 }
  
  
  
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" key={props.video.id.videoId} src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={onTitleClick}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoListEntry = VideoListEntry;