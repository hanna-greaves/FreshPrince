import { readRap } from './src/gen'
const say = require('say')

const len = 200

const readLine = (lines, i) => {
    if(i >= lines.length) {
        return
    }
    console.log(lines[i])
    say.speak(lines[i], undefined, 1.3, () => readLine(lines, i + 1))
}

readRap((contents) => {
    let x = 0
    let prior = -1
    let lines = []
    while(x < len) {
        let index = -1 
        do {
            index = Math.trunc(Math.random() * contents.length)
        } while(index === prior)
        prior = index
        const s = contents[index]
        x += s.length
        lines.push(s)
    }
    readLine(lines, 0)
})