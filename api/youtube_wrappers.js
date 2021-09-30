var fs = require('fs');
var path = require('path');
var ytdl = require('ytdl-core');
var yts = require('yt-search');

const YOUTUBE_URL_PREFIX = "https://www.youtube.com/watch?v=";

async function search_one(query, language) {
  let results = await yts(query);
  console.log(`Pesquisando por: ${query}`);
  console.log(`Idioma: ${language}`);
  console.log(results);
  let videos = results.videos;
  if (!videos || !videos.length) {
    return null;
  }
  let video = videos[0];
  return {
    id: video.videoId,
    link: video.url,
    title: video.title
  };
}

module.exports = {
  search_one
}
