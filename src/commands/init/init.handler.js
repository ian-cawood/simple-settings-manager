const inquirer = require('inquirer')

const promts = require('./promts')
const file = require('../../common/file')
const json = require('../../common/json')
const { defaultConfigFile, defaultFileStructure } = require('./constants')

const handler = () => {
  inquirer
    .prompt([
      promts.baseFileName,
      promts.stages,
    ])
    .then(answers => {
      const { stages, baseFileName } = answers
      stages.forEach(stage => 
        file.write(`${baseFileName}.${stage}.json`, json.stringifyWith2Spaces(defaultFileStructure))
      )
      const configFile = {
        ...defaultConfigFile,
        stages,
        baseFileName,
        fileType: 'json'
      }
      file.write('ssm.config.json', json.stringifyWith2Spaces(configFile))
    })
}

module.exports = handler
