# Text Prediction App

Created a text prediction app simillar to a smart phone keyboard.  

A dataset was created based on a corpus.  All predictions are provided by searcihg on this dataset.

# Corpus used
http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/

A public set of SMS labeled messages that have been collected for mobile phone spam research.

## Software Requirements
This has been tested on:
* Node v10.16.0
* Chrome Browser v75

Should work on any version of Node >= 10 and most versions of Chrome.

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
* The corpus had to be a minimum of 100k in size.  Not necessarily contain 100k messages.  
* Not to use a library when searching for the words within the dataset.  Write the code search code myself and design the search algorithm.

## Approach
### 1. Extract data from Corpus - Unique Words, Word Frequency Count, convert data to lower case
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
Using Excel, I sorted the CSV alphabetically based on each unique word in the corpus.

### 5. Converted the file to JSON
Converted the file to JSON so it can be easily imported onto the React App.

Used the following site: http://www.convertcsv.com/csv-to-json.htm

## Algorithm to find words
The app will search as follows:
1. If Search term is empty then return nothing.
2. If Search term is only numbers then return nothing.
3. If multiple words entered, then use the last word.
4. Convert Search term to lower case.
5. Remove any numbers from the search term.
6. Search the trained dataset for all words beginning with the search term.
7. Sort the results with the most frequent words descending.
8. Returns the top 3 words.

## Other ideas tried
Looked at the NPM package 'text-miner': https://www.npmjs.com/package/text-miner.

Could not get it working.

## Redux
Used Redux to manage state and data flow: https://redux.js.org/

## Styled Components
Styling using: https://www.styled-components.com/

## Future Updates
* Set up a backend service to create searches in an Async fashion.
* Cache search results.
* Create search indexes to make searches faster.
* Use a bigger dataset.
* Take into the context of the sentence when returning the words.
