import { readRap } from './src/gen'
const len = 200
readRap((contents) => {
    let x = 0
    let prior = -1
    while(x < len) {
        let index = -1 
        while(index === prior) {
            index = Math.trunc(Math.random() * contents.length)
        }
        const s = contents[index]
        x += s.length
        console.log(s)
    }
})