var searchYouTube = (options, callback) => {
  let params = {
    key: options.key || window.YOUTUBE_API_KEY,
    maxResults: options.max || 5,
    part: 'snippet',
    type: 'video',
    q: options.query || 'cats'
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: params,
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.error('ERROR')
      callback(data);
    }
  });
};

window.searchYouTube = searchYouTube;
