import babel from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

const globals = {
    react: 'React',
    'react-router-dom': 'reactRouterDom',
    reactstrap: 'reactstrap',
    'prop-types': 'PropTypes'
}

const external = Object.keys(globals)

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle-lib-layout.js',
        format: 'umd', //"amd", "cjs", "system", "es", "iife" or "umd".
        name: 'library-layout-react',
        globals
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            exclude: 'node_modules/**'
        }),
        sass({
            output: 'dist/bundle.css'
        }),
        production && terser()
    ],
    external
};