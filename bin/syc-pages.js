#! /usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd())

process.argv.push('--gulpfile')
process.argv.push(require.resolve('../lib')) // require 载入这个模块，require.resolve 找到这个模块对应的路径（相对路径进行传参）

require('gulp/bin/gulp')