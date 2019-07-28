##### Table of Contents

# TVGuide App

## TV Guide data from end point using Redux Saga
This app uses Redux saga to get TV guide data from a public endpoint - TV Maze.

You click a buttin and it retrieves the show name of the first TV show if finds.

## Used Create-React-App as boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Approach


## Install App
Clone the repository and enter the directory:
```
git clone git@github.com:iq2525/tvGuide-app.git
cd tvGuide-app
``` 

Install dependencies:
```
npm install
```

## Run App
```
npm start
```

In your browser, go to: http://localhost:3000/

Click the button 'Update TVGuide' to get information .

## Run tests

```
npm test
```

Need more tests for the Saga part of the code.

## Data Endpoint

The app uses the following endpoint:
http://api.tvmaze.com/search/shows?q=sport

Assumptions
100K File size - not 100 k messages
Cleaned files myself
Don't use a library - find words myself
https://mytexttools.com/extract-unique-words-from-text-with-frequency-count.html
- Strip out digits
http://www.convertcsv.com
Convert to lower case

Trim spaces
lowercase

