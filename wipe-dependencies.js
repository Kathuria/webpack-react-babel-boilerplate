/**
 * Wipe the version numbers replacing them with an asterisk.
 * This version covers both devDependencies and dependencies. 
 * You could modify the script to only update devDependencies. 
 * This could be less risky for the actual output of your project to start with.
 */

const fs = require('fs')
const wipeDependencies = () => {
  const file  = fs.readFileSync('package.json')
  const content = JSON.parse(file)
  for (const devDep in content.devDependencies) {
    content.devDependencies[devDep] = '*'
  }
  for (const dep in content.dependencies) {
    content.dependencies[dep] = '*'
  }
  fs.writeFileSync('package.json', JSON.stringify(content))
}
if (require.main === module) {
  wipeDependencies()
} else {
  module.exports = wipeDependencies
}