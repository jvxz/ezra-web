import antfu from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'
import rtw from 'eslint-plugin-readable-tailwind'

export default antfu({
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },

  typescript: {
    parserOptions: {
      project: './tsconfig.json',
    },
    overrides: {
      'ts/no-floating-promises': 'error',
      'ts/consistent-type-imports': 'error',
      'ts/no-unnecessary-condition': 'warn',
    },
  },

  plugins: {
    'readable-tailwind': rtw,
    '@next/next': next,
  },

  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
  ],

  rules: {
    ...next.configs.recommended.rules,
    ...rtw.configs.warning.rules,

    'antfu/if-newline': 'off',
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],
    'node/prefer-global/process': 'off',
    'object-shorthand': ['warn', 'always'],
    'perfectionist/sort-imports': 'error',
    'readable-tailwind/multiline': 'off',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-duplicate-jsx-props': 'error',
    'react/no-implicit-key': 'error',
    'react/no-useless-fragment': 'error',
    'react/prefer-shorthand-boolean': 'error',
    'react-dom/no-unknown-property': 'error',
    'react-hooks-extra/no-unnecessary-use-callback': 'error',
    'react-hooks-extra/no-unnecessary-use-memo': 'error',
    'style/jsx-closing-bracket-location': [1, 'line-aligned'],
    'style/jsx-closing-tag-location': [1, 'line-aligned'],
    'style/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'style/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'non-jsx',
      },
    ],
    'style/jsx-quotes': ['error', 'prefer-double'],
    'style/function-paren-newline': ['error', 'multiline'],
    'style/indent': ['error', 2],
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
    }],
    'style/object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    'style/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: 'var',
      next: 'return',
    }],
    'style/quotes': ['error', 'single'],
    'style/space-in-parens': ['error', 'never'],
    'ts/strict-boolean-expressions': 'off',
    'unicorn/throw-new-error': 'off',
  },
})
