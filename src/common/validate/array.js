const lengthGreaterThan = (number, validationMessage, array) => {
  if (array.length < number) {
    return validationMessage
  }

  return true
}

module.exports.lengthGreaterThan = lengthGreaterThan