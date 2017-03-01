import babelLoadConfig from '../src'

test('main', () => {
  expect(typeof babelLoadConfig).toBe('function')
})
