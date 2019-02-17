require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const Spotify = require("node-spotify-api");
const keys = require("/Users/john/Desktop/HW-10/Liri-Bot/keys");
const moment = require("moment");

let spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");

function runCommands(command, search) {
    switch (command) {
        case "concert-this":
            getMyBand(search);
            break;
        case "spotify-this-song":
            getMySpotify(search);
            break;
        case "movie-this":
            getMyMovie(search);
            break;
        case "do-what-it-says":
            fs.readFile("random.txt", "UTF-8", function(error, data) {
                if (error) {
                    console.log("Error: " + error);
                }
                else {
                    let choice = data.split(",");
                    runCommands(choice[0], choice[1]);
                }
            });
            break;
        default:
            console.log("Use README.md and follow directions");
            break;
    }
};

function getMyBand(artist) {
    let concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(concertURL).then(function(response) {
        let data = response.data[0];

        let concertData = [
            "-----------------------------",
            "Artist: " + artist,
            "\nVenue: " + data.venue.name,
            "\nLocation: " + data.venue.city + ", " + data.venue.region,
            "\nDate: " + moment(data.datetime).format("MM/DD/YYYY"),
            "-----------------------------"
        ].join("\n");

        console.log(concertData);
    })
    .catch(function(error) {
        console.log(error);
    });
};

function getMySpotify(item) {
    spotify.search({ type: 'track', query: item })
        .then(function(response) {
            let data = response.tracks.items[0].album;
            // console.log(data);

            let songData = [
                "-----------------------------",
                "Artist: " + data.artists[0].name,
                "\nSong: " + item,
                "\nSpotify Link: " + data.artists[0].external_urls.spotify,
                "\nAlbum: " + data.name,
                "-----------------------------"
            ].join("\n\n");

            console.log(songData);
        })
        .catch(function(err) {
            console.log(err);
        });
};

function getMyMovie(movie) {
    let movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    axios.get(movieURL).then(function(response) {
        let data = response.data;
        
        let movieData = [
            "-----------------------------",
            "Title: " + data.Title,
            "\nYear Produced: " + moment(data.Released, "DD-MMM-YYYY").format("dddd, MMMM Do YYYY"),
            "\nIMDB Rating: " + data.Ratings[0].Value,
            "\nRotten Tomatoes Rating: " + data.Ratings[1].Value,
            "\nProduction Country: " + data.Country,
            "\nLanguage: " + data.Language,
            "\nPlot: " + data.Plot,
            "\nActors: " + data.Actors,
            "-----------------------------"
        ].join("\n");

        console.log(movieData);
    })
    .catch(function(error) {
        console.log(error);
    });
};

runCommands(command, search);


// if (command === "concert-this") {
//     getMyBand(search);
// }

// if (command === "spotify-this-song") {
//     getMySpotify(search);
// }

// if (command === "movie-this") {
//     getMyMovie(search);
// }

