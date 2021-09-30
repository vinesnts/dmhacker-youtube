var fs = require('fs');
var path = require('path');
var ytdl = require('ytdl-core');
var yts = require('yt-search');

const YOUTUBE_URL_PREFIX = "https://www.youtube.com/watch?v=";

async function search_one(query, language) {
  try {
    const response = yts(query, (err, response) => {
      if (err) {
        return err;
      } else if (!response.videos || !response.videos.length) {
        let video = videos[0];
        return {
          id: video.videoId,
          link: video.url,
          title: video.title
        };
      }
    });
    console.log(response)
    return response;
  } catch (e) {
    return null;
  }
}

module.exports = {
  search_one
}
