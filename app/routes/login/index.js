const config = require("config")
const express = require("express");
const resource = require("./resource");

const router = express.Router();


router.get('/', (req, res) => {
  const scopes = 'user-library-read user-library-modify user-top-read user-modify-playback-state playlist-modify-public'
  const clientId = process.env.CLIENT_ID;
  const redirectUrl = 'http://localhost:3000/home';
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUrl}`;

  res.redirect(url);
});

module.exports = router;