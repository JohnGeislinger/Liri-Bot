# Liri-Bot

LIRI is a SIRI-Clone project.  Instead of Speech Recognition Interface, LIRI uses the command line interface to take in parameters for the Node.js app, and returns the data using the same CLI.  

## Getting Started

All inputs must be entered using the Terminal Window beginning with the following command:

```
node liri.js "command" <search result>
```

## Commands

Below are the various commands that LIRI will recognise.  

* ### Concert Search

    If you want to search the Bands in Town API and find out when a specific artist is going to be playing next.

```
node liri.js concert-this <band name here>
```
![concert-this](/gifs/concert-this.gif)

* ### Spotify Search

    If you want to search the Spotify API and find out information about a certain song.

```
node liri.js spotify-this-song <song name here>
```
![spotify-this-song](/gifs/spotify-this-song.gif)

* ### Movie Search
    If you want to search the OMDB API and find out information about a certain movie title.

```
node liri.js movie-this <movie title here>
```
![movie-this](/gifs/movie-this.gif)

* ### Example Search

    If you interested in just seeing what the program will do, copy and paste the command below into the CLI and hit enter.

```
node liri.js do-what-it-says
```
![do-what-it-says](/gifs/do-what-it-says.gif)

## Built With

* [Node.js](https://nodejs.org/en/) - Back-end
* [Axios](https://www.npmjs.com/package/axios) - Promise Based HTTP Client
* [Moment](https://www.npmjs.com/package/moment) - JavaScript Date Library
* [Spotify](https://developer.spotify.com/documentation/web-api/) - Music API
* [Bands in Town](https://manager.bandsintown.com/support/bandsintown-api) - Concert API
* [OMDB](http://www.omdbapi.com/) - Movie API

## Authors

* **John Geislinger** - [JohnGeislinger](https://github.com/JohnGeislinger)

## Deployment

Deployed to [GitHub](https://github.com/JohnGeislinger/Liri-Bot).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* None