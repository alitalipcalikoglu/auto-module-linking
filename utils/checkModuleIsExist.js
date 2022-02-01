import fs from 'fs'

export const checkModuleIsExist = (module) => {
  const nodeModulesPath = './node_modules/'
  if (fs.existsSync(nodeModulesPath)) {
    const modulePath = `${nodeModulesPath}${module}`
    if (fs.existsSync(modulePath)) return true
    return false
  } else {
    return false
  }
}
