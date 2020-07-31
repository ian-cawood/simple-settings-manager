const validate = require('../../common/validate')

exports.baseFileName = {
  type: 'list',
  name: 'baseFileName',
  message: 'What base file name would you like to use? (e.g. env, settings)',
  choices: [
    '.env',
    '.settings',
    '.config',
  ]
}

exports.email = {
  type: 'list',
  name: 'baseFileName',
  message: 'What base file name would you like to use? (e.g. env, settings)',
  choices: [
    '.env',
    '.settings',
    '.config',
  ]
}

exports.stages = {
  type: 'checkbox',
  message: 'Select stages',
  name: 'stages',
  choices: [
    {
      name: 'local'
    },
    {
      name: 'dev'
    },
    {
      name: 'staging'
    },
    {
      name: 'qa'
    },
    {
      name: 'production'
    }
  ],
  validate: (answer) => {
    return validate.array.lengthGreaterThan(1, 'You must choose at least one stage.', answer)
  }
}
