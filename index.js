import { detectModules } from './app/detectModules.js'
import { checkModuleIsExist } from './app/checkModuleIsExist.js'
import { linkModule } from './app/linkModule.js'

const modulesPath = './modules/'
const modules = detectModules(modulesPath)
if (modules && modules.length > 0) {
  modules.forEach((module) => {
    const isExist = checkModuleIsExist(module)
    if (isExist) return console.log(`${module} is already exist.`)
    linkModule(modulesPath, module)
    console.log(`${module} linked.`)
  })
}
