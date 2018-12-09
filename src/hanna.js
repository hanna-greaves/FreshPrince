import {readRap} from './gen'

export function buildWillSmithLyrics (bars, dropSomeRhymes) {
    let start = []
    let end = []
    let dictionary = {}
    return readRap((rap) => {

        console.log(rap)

        for(let x = 0; x < rap.length; x++) {
            const words = rap[x].split(' ');
            start.push(words[0])
            end.push(words[words.length -1])
            for(let y = 0; y < words.length - 1; y++) {
                if(!dictionary.hasOwnProperty(words[y])) {
                    dictionary[words[y]] = []
                }
    
                dictionary[words[y]].push(words[y + 1])
            }
        }

        let willsWickedBars = []

        for(let x = 0; x < bars; x++) {

            let index = Math.floor(Math.random() * (start.length - 1));
            let sentance = start[index]
            let lastWord = sentance
            
            for(let y = 0; y < 20; y++) {

                if ((end.includes(lastWord) && y < 7) || !dictionary[lastWord]) {
                    console.log(!dictionary[lastWord])
                    break
                }

                lastWord = dictionary[lastWord][Math.trunc(Math.random() * dictionary[lastWord].length)]
                sentance += ` ${lastWord}`
            }

            willsWickedBars.push(sentance)
        }
        dropSomeRhymes(willsWickedBars)
    })
}


