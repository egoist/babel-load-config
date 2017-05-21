import path from 'path'
import buildConfigChain from 'babel-core/lib/transformation/file/options/build-config-chain'
import babelLoadConfig from '../src'

test('main', () => {
  const config = babelLoadConfig(null, buildConfigChain)
  expect(config).toEqual({
    options: {},
    alias: path.join(__dirname, '../package.json'),
    loc: path.join(__dirname, '../package.json'),
    dirname: path.join(__dirname, '..')
  })
})
