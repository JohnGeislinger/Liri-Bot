// require("dotenv").config();
const fs = require("fs");
// const inquirer = require("inquirer");
const axios = require("axios");
const Spotify = require("node-spotify-api");
// const keys = require("./Liri-Bot/keys");
const moment = require("moment");

const spotify = new Spotify({
    id: "cf832e5b2c5c4ecba5ff945dd34d30e6",
    secret: "0adc862fb4e847c39de27cb1a6a90d90"
});

const command = process.argv[2];
const search = process.argv.slice(3).join(" ");

function getMyBand(artist) {
    const concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(concertURL).then(function(response) {
        let data = response.data[0];

        let concertData = [
            "-----------------------------",
            "Artist: " + artist,
            "\nVenue: " + data.venue.name,
            "\nLocation: " + data.venue.city + ", " + data.venue.country,
            "\nDate: " + data.datetime,
            "-----------------------------"
        ].join("\n");

        console.log(concertData);
    })
    .catch(function(error) {
        console.log(error);
    });
};

function getMySpotify(item) {
    spotify.search({ type: "track", query: item, limit: 1 }, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log(data);
    
        let songData = [
            "-----------------------------",
            "Artist: " + artist,
            "\nVenue: " + data.venue.name,
            "\nLocation: " + data.venue.city + ", " + data.venue.country,
            "\nDate: " + data.datetime,
            "-----------------------------"
        ]


    });
};

if (command === "concert-this") {
    getMyBand(search);
}

if (command === "spotify-this-song") {
    getMySpotify(search);
}

// let runSearch = function (command, search) {
//     switch (command) {
//         case "concert-this":
//             getMyBand(search);
//         break;

//         case "spotify-this-song":
//             getMySpotify(search);
//         break;

//         case "movie-this":

//         break;

//         case "do-what-it-says":

//         break;

//         default:
//         console.log("LIRI does not understand");
//     }
// }


