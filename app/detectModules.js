import fs from 'fs'

export const detectModules = (modulesRootPath) => {
  if (modulesRootPath[modulesRootPath.length - 1] !== '/') modulesRootPath += '/'
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
