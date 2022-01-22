import { exec } from 'child_process'

export const linkModule = (modulesPath, module) => {
  const modulePath = `${modulesPath}${module}`
  exec(`npm link ${modulePath}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`)
    if (stderr) return console.log(`stderr: ${stderr}`)
    // console.log(`stdout: ${stdout}`)
  })
}
