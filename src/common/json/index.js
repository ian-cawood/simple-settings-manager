const stringifyWithSpaces = spaces => data => JSON.stringify(data, null, spaces)

const stringifyWith2Spaces = stringifyWithSpaces(2)

module.exports.stringifyWith2Spaces = stringifyWith2Spaces
