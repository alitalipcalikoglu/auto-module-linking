#!/usr/bin/env node

import readline from 'readline'
import { checkModuleIsExist } from './utils/checkModuleIsExist.js'
import { detectModules } from './utils/detectModules.js'
import { link } from './utils/link.js'

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

cli.question('What is your local modules path ? ', (modulesPath) => {
  if (!modulesPath) {
    console.log('modulesPath is required.')
    return cli.close()
  }
  const modules = detectModules(modulesPath)

  if (!modules || modules.length === 0) {
    console.log(`There ara no modules in "${modulesPath}"`)
    return cli.close()
  }

  modules.forEach((module) => {
    const isExist = checkModuleIsExist(module)
    if (isExist) {
      console.log(`${module} is already exist.`)
      return cli.close()
    }
    link(modulesPath, module)
  })

  cli.close()
})

cli.on('close', () => {
  process.exit(0)
})
