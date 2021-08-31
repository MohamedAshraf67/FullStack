var axios = require("axios").default;
const express = require('express');
const api = express.Router();
api.get('/football', (req,res) => {
  var options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
      'x-rapidapi-key': 'ebafbe6454mshff58fd2bd3b4a8dp178171jsne2f1bc21408c'
    }
  };
  axios.request(options).then(function (response) {
    res.render('data', {name: response.data[65].title, thumbnail: response.data[65].thumbnail, video: response.data[65].video, url: response.data[65].url, title: "Football Videos"});
  }).catch(function (error) {
    console.error(error);
  });
});

module.exports = api;
