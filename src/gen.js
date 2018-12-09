var fs = require('fs')

export function readRap (then) {
    fs.readFile('rap.txt', 'utf8', function(err, contents) {
        then(contents.split('\n'))
    })
}
