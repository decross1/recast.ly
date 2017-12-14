var VideoList = (props) => {
  return (
  <div className="video-list">
    {props.videos.map((vid) => <VideoListEntry video={vid} handlevideochange={props.videochange} />)}
  </div>
);
}
window.VideoList = VideoList;
