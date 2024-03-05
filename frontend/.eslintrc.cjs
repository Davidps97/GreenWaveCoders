module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Reglas adicionales
    'no-unused-vars': 'warn', // Avisar sobre variables declaradas pero no utilizadas
    'no-unused-expressions': 'warn', // Avisar sobre expresiones sin usar
    'no-empty': 'warn', // Avisar sobre bloques de código vacíos
    'no-empty-function': 'warn', // Avisar sobre funciones vacías
    'no-console': 'warn', // Avisar sobre la presencia de declaraciones console
    'default-case': 'warn', // Avisar sobre switch sin case default
    'eqeqeq': 'warn', // Avisar sobre el uso de == y !=
    'no-implicit-coercion': 'warn', // Avisar sobre coerciones implícitas
    'prefer-const': 'warn', // Avisar sobre el uso de let o var cuando const sería suficiente
    'prefer-template': 'warn', // Avisar sobre el uso de concatenación de strings cuando se puede usar template literals
  },
}
