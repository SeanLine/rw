module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
    'max-lines': ['error', { max: 2 }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
      node: {
        project: ['tsconfig.json'],
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
