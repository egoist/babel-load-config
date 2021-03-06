// taken from https://github.com/zeit/next.js/blob/b220193167069acf9641b02d31437c8bf741a5df/server/build/babel/find-config.js
import { join } from 'path'

export default function findBabelConfig(dir, buildConfigChain) {
  dir = dir || process.cwd()

  if (typeof buildConfigChain !== 'function') {
    throw new TypeError(`Expect "buildConfigChain" to be a function, most likely you will use "babel-core/lib/transformation/file/options/build-config-chain"`)
  }

  // We need to provide a location of a filename inside the `dir`.
  // For the name of the file, we could be provide anything.
  const filename = join(dir, 'filename.js')
  const options = { babelrc: true, filename }

  // First We need to build the config chain.
  // Then we need to remove the config item with the location as "base".
  // That's the config we are passing as the "options" below
  const configList = buildConfigChain(options).filter(i => i.loc !== 'base')

  return configList[0]
}
