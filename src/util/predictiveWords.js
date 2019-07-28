import words from './words.json'

export const getWords = (inputText) => {
    console.log('input text: ', inputText)

    const inputTextCleaned = inputText.toLowerCase().trim();

    const wordsFound = words.filter((element) => {
        return element.word.startsWith(inputTextCleaned)
    })

    const sortedByFrequency = wordsFound.sort((a, b) => b.count - a.count );
    
    const top3Words = sortedByFrequency.slice(0, 3) 
    return top3Words;
}
