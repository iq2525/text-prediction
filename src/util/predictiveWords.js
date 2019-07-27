import words from './words.json'

export const getWords = () => {
    
    const wordsFound = words.filter((element) => {
        // console.log('element: ', element)
        return element.word.startsWith('te')
    })

    const sortedByFrequency = wordsFound.sort((a, b) => b.count - a.count );
    console.log('wordsFound:', wordsFound)
    console.log('sortedByFrequency:', sortedByFrequency)
    console.log('top 3:', sortedByFrequency.slice(0, 3))
}
