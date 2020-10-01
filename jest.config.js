module.exports = {
  verbose: false,
  preset: '@vue/cli-plugin-unit-jest',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue-tjw'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
