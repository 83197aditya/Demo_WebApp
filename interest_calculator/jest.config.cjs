module.exports = {
  testEnvironment: "jest-environment-node",
  extensionsToTreatAsEsm: ['.js'], // Treat .js files as ESM
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'mjs'], // Add 'mjs' for ESM support
};