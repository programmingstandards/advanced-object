import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'advancedObject',
    },
    plugins: [
        babel({
          exclude: 'node_modules/**',
        })
    ],
};