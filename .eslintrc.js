module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
        extensions: ['.tsx', '.ts', '.js'],
      },
      node: {
        project: ['tsconfig.json'],
        extensions: ['.tsx', '.ts', '.js'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
