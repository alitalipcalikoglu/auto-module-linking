import { checkModuleIsExist } from './app/checkModuleIsExist.js'
import { detectModules } from './app/detectModules.js'
import { link } from './app/link.js'

/**
 *
 * @param {string} modulesPath Your Local Modules Folder Path
 */
export const LinkModules = (modulesPath) => {
  if (!modulesPath) return console.log('modulesPath is required.')
  const modules = detectModules(modulesPath)
  if (modules && modules.length > 0) {
    modules.forEach((module) => {
      const isExist = checkModuleIsExist(module)
      if (isExist) return console.log(`${module} is already exist.`)
      link(modulesPath, module)
      console.log(`${module} linked.`)
    })
  }
}
