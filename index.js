import { readRap } from './src/gen'
const say = require('say')
const fs = require('fs')
const player = require('player');
 
const len = 200

// create player instance
const p = new player('./fresh.mp3');
p.play()

const readLine = (lines, i) => {
    if(i >= lines.length) {
        p.stop()
        return
    }
    console.log(lines[i])
    say.speak(lines[i], undefined, 1.3, () => readLine(lines, i + 1))
}

const parseRap = ((contents) => {
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

readRap(parseRap)