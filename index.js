import { readRap } from './src/gen'
import {buildWillSmithLyrics} from './src/hanna'

const say = require('say')
const len = 200

const readLine = (lines, i) => {
    if(i >= lines.length) {
        return
    }
    say.speak(lines[i], undefined, 1.3, () => readLine(lines, i + 1))
}

buildWillSmithLyrics(4, (bars) => {
    readLine(bars, 0)
})