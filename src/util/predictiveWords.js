import words from './words.json'

export const getWords = (inputText) => {
    const cleanedInputText = getCleanInput(inputText)
    
    if (!cleanedInputText){
        return [];
    }
    

    const wordsFound = words.filter((element) => {
        return element.word.startsWith(cleanedInputText)
    })

    const sortedByFrequency = wordsFound.sort((a, b) => b.count - a.count );
    
    const top3Words = sortedByFrequency.slice(0, 3) 
    return top3Words;
}

const getCleanInput = (inputText) => {
    const inputTextCleaned = inputText.toLowerCase().trim();
    const singleWord = inputTextCleaned.split(' ').pop();
    const finalWord = singleWord.replace(/\d/g, '');

    return finalWord;
}
