
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['import'],
  rules: {
    'max-lines': ['error', { max: 2 }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ["tsconfig.json"],
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
      node: {
        project: ["tsconfig.json"],
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
