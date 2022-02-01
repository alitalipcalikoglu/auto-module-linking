import { execSync } from 'child_process'

export const link = (modulesPath, module) => {
  const modulePath = `${modulesPath}/${module}/`
  const execCode = `npm link ${modulePath}`
  const result = execSync(execCode).toString()
  console.log(result)
}
