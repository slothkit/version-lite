import { resolve as _resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel'
import fs from 'fs-extra'
import babelConfig from '../babel.config.js'
const { readJsonSync } = fs

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const resolve = (p) => _resolve(__dirname, '..', p)

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const pkgJson = readJsonSync(resolve('package.json'))
const { name, version } = pkgJson

export default {
  input: resolve('src/index.ts'),
  output: {
    file: resolve(`dist/${name}.js`),
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    commonjs(),
    nodeResolve({ browser: true }),
    json({ namedExports: false }),
    typescript({
      tsconfig: resolve('tsconfig.json'),
      compilerOptions: {
        declaration: true,
        declarationDir: 'types',
        sourceMap: false,
      },
    }),
    replace({
      preventAssignment: true,
      exclude: 'node_modules/**',
      __VERSION__: JSON.stringify(version),
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      ...babelConfig,
    })
  ]
}
