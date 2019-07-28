# Text Prediction App

Created a text prediction app simillar to a smart phone keyboard.  Predictions were trained from a corpus.

# Corpus used
http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/

A public set of SMS labeled messages that have been collected for mobile phone spam research

## Software Requirements
This has been tested on:
* Node v10.16.0
* Chrome Browser v75

Should work on any version of Node 10 and most versions of Chrome.

## Install App
Clone the repository and enter the directory:
```
git clone git@github.com:iq2525/text-prediction.git
cd text-prediction
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

Start typing in the text box.

## Run tests

```
npm test
```

## Bootstrapped with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions
* The corpus had to be a minimum of 100k in size.  Not contain 100k messages.  
* Not to use a library when searching for the words with the dataset.  Write the code that will perform the searching and decide how the algorithm will work.

## Approach
### 1. Extract data from Corpus - Unique Words, Word Frequency Count, convest data to lower case
Used this website on the corpus: 
https://mytexttools.com/extract-unique-words-from-text-with-frequency-count.html

Provided me with a text file with data in the following columns:
* Word - Unique word found in the corpus.  E.g. car
* Count - How many time the words appear in the corpus. E.g. 453

Also converted data to lower case so that searches would be case insensitive.

### 2. Convert to CSV
Used this site to convert text file to CSV: http://www.convertcsv.com/

### 3. Removed all numbers
Using Excel, I removed all numbers like telephone numbers.

### 4. Sorted data alphabetically
Using Excel, I sorted the CSV.

### 5. Converted the file to JSON so it can be easily imported
Converted the file to JSON so it can be easily imported onto the React App.

Used the following site: http://www.convertcsv.com/csv-to-json.htm

## Algorithm to find words
The app will search as follows:
1. If Search term is empty then return nothing. 
2. Convest Search term to lower case.
2. Searches the trained dataset for all words beginning with the search term.
2. Sorts the results with the most frequent words found in the dataset first.
3. Returns the top 3 words.

## Other ideas tried
Looked at the NPM package 'text-miner': https://www.npmjs.com/package/text-miner.

Could not get it working.

## Redux
Used Redux to manage state and data flow: https://redux.js.org/

## Styling
Styling using: https://www.styled-components.com/

## Future Updates
* Set up a backend service to create searches in an Async fashion.
* Cache search results.
* Create search indexes to make searches faster.
* Take into the context of the sentence when returning the words.
