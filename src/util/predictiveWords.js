import words from './words.json'

export const getWords = (inputText) => {
    console.log('input text: ', inputText)

    const inputTextCleaned = inputText.toLowerCase().trim();

    const wordsFound = words.filter((element) => {
        // console.log('element: ', element)
        return element.word.startsWith(inputTextCleaned)
    })

    const sortedByFrequency = wordsFound.sort((a, b) => b.count - a.count );
    const top3Words = sortedByFrequency.slice(0, 3) 
    // console.log('wordsFound:', wordsFound)
    // console.log('sortedByFrequency:', sortedByFrequency)
    console.log('top 3:', sortedByFrequency.slice(0, 3))
    return top3Words;
}
