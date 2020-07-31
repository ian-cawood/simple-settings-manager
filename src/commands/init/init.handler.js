const inquirer = require('inquirer')

const prompts = require('./prompts')
const file = require('../../common/file')
const json = require('../../common/json')
const { defaultConfigFile, defaultFileStructure } = require('./constants')

const handler = () => {
  inquirer
    .prompt([
      prompts.baseFileName,
      prompts.stages,
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
