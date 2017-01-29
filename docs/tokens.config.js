'use strict'

const path = require('path')

module.exports = {
  order: 2,
  name: 'Design Tokens',
  context: {
    borders: require(path.join(process.cwd(), 'tokens/borders.json')),
    breakpoints: require(path.join(process.cwd(), 'tokens/breakpoints.json')),
    colors: require(path.join(process.cwd(), 'tokens/colors.json')),
    fonts: require(path.join(process.cwd(), 'tokens/fonts.json')),
    layers: require(path.join(process.cwd(), 'tokens/layers.json')),
    sizes: require(path.join(process.cwd(), 'tokens/sizes.json')),
    spaces: require(path.join(process.cwd(), 'tokens/spaces.json'))
  }
}
