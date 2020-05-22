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
    if (answer.length < 1) {
      return 'You must choose at least one stage.'
    }

    return true
  }
}
