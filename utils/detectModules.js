import fs from 'fs'

export const detectModules = (modulesRootPath) => {
  if (modulesRootPath[modulesRootPath.length - 1] !== '/') modulesRootPath += '/'
  if (!fs.existsSync(modulesRootPath)) return console.log(`The ${modulesRootPath} folder does not exist.`);
  const modulesDirectory = fs.readdirSync(modulesRootPath)
  const modules = []
  modulesDirectory.forEach((module) => {
    const folderPath = modulesRootPath + module
    if (!fs.lstatSync(folderPath).isDirectory()) return console.log(`${folderPath} is not a directory.`)
    const moduleFolder = fs.readdirSync(folderPath)
    const hasPackageJson = moduleFolder.find((f) => f === 'package.json')
    if (!hasPackageJson) return console.log(`${module} does not contain package.json`)
    modules.push(module)
  })
  return modules
}
