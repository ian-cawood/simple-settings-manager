const inquirer = require('inquirer')

const prompts = require('./prompts')
const file = require('../../common/file')
const json = require('../../common/json')
const crypto = require('../../common/crypto')
const { defaultConfigFile, defaultFileStructure } = require('./constants')

const handler = () => {
  inquirer
    .prompt([
      prompts.baseFileName,
      prompts.stages,
    ])
    .then(async answers => {
      const { stages, baseFileName } = answers

      // create stages files
      stages.forEach(stage => 
        file.write(`${baseFileName}.${stage}.json`, json.stringifyWith2Spaces(defaultFileStructure))
      )
      
      // generate private and public keys
      const { privateKeyArmored, publicKeyArmored } = await crypto.generateECCKeys([{ email: 'test@test.com'}], '')
      console.log(privateKeyArmored)

      // create configFile
      const configFile = {
        ...defaultConfigFile,
        stages,
        baseFileName,
        fileType: 'json',
        publicKeyArmored,
      }
      file.write('ssm.config.json', json.stringifyWith2Spaces(configFile))
    })
}

module.exports = handler
