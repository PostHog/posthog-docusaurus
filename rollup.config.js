import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: './src/index.js',
    output: { file: 'lib/index.js', format: 'cjs' },
    external: ['@docusaurus/ExecutionEnvironment'],
    plugins: [babel(), resolve()]
  },
  {
    input: './src/posthog.js',
    output: { file: 'lib/posthog.js', format: 'cjs' },
    external: ['@docusaurus/ExecutionEnvironment'],
    plugins: [babel(), resolve()]
  }

]
