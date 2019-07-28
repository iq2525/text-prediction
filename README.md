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


## Approach
###1. Extsact Unique Words, convest to lower care and get Frequency Count
Used this website on the corpus: 
https://mytexttools.com/extract-unique-words-from-text-with-frequency-count.html

Provided me with a text file with data in the following format for every unique word in the corpus:
*Word - The actual unique word.  E.g. car
*Count - How many time the words appear in the corpus. E.g. 453

###2. Convert to CSV
Used this site to convert text file to CSV.

###3. Removed all numbers
Using Excel, I removed all numbers like telephone numbers.

###4. Sorted data alphabetically
Using Excel, I sorted the CSV.

###5. Converted the file to JSON so it can be easily imported
Converted the file to JSON so it can be easily imported.
Used the following site: http://www.convertcsv.com/csv-to-json.htm

###6. When a user enters a word, the App will return the 3 most frequent words beginning with those letters
The app will search 

## Other ideas tried


## Future Updates

Assumptions
100K File size - not 100 k messages
Cleaned files myself
Don't use a library - find words myself
https://mytexttools.com/extract-unique-words-from-text-with-frequency-count.html
- Strip out digits
http://www.convertcsv.com
Convert to lower case
Styling

COntext of words
Link to Corpus

Trim spaces
lowercase
Clean data

Requirements
