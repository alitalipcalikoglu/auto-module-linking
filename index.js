import fs from 'fs'
import { exec } from 'child_process'

const detectModules = (modulesRootPath) => {
  if (!fs.existsSync(modulesRootPath)) return console.log('The "modules" folder does not exist.')
  const modulesDirectory = fs.readdirSync(modulesRootPath)
  const modules = []
  modulesDirectory.forEach((module) => {
    const folderPath = modulesRootPath + module
    if (!fs.lstatSync(folderPath).isDirectory()) return
    const moduleFolder = fs.readdirSync(folderPath)
    const isModule = moduleFolder.find((f) => f === 'package.json')
    if (!isModule) return console.log(`${module} does not contain package.json.`)
    modules.push(module)
  })
  return modules
}

const checkModuleIsExist = (module) => {
  const nodeModulesPath = './node_modules/'
  if (fs.existsSync(nodeModulesPath)) {
    const modulePath = `${nodeModulesPath}${module}`
    if (fs.existsSync(modulePath)) return true
    return false
  } else {
    return false
  }
}

const linkModule = (modulesPath, module) => {
  const modulePath = `${modulesPath}${module}`
  exec(`npm link ${modulePath}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`)
    if (stderr) return console.log(`stderr: ${stderr}`)
    // console.log(`stdout: ${stdout}`)
  })
}

const startLinking = () => {
  const modulesPath = './modules/'
  const modules = detectModules(modulesPath)
  if (!modules || modules.length === 0) return
  modules.forEach((module) => {
    const isExist = checkModuleIsExist(module)
    if (isExist) return console.log(`${module} is already exist.`)
    linkModule(modulesPath, module)
    console.log(`${module} linked.`)
  })
}

startLinking()
