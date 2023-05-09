import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { entry, webpackModule, plugins } from './webpack.parts';

const common_config = merge([
    {
        context: path.resolve(__dirname, 'src'),
        output: { path: path.resolve(__dirname, 'dist', 'www'), filename: './assets/js/[name].bundle.js' },
        plugins: [new HtmlWebpackPlugin({ template: './assets/index.html' })],
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
                '../../theme.config$': path.resolve(__dirname, 'src/assets/semantic/theme.config')
            }
        }
    }
]);

const merge_production = () =>
    merge([
        entry({ app_files: ['./index.jsx'] }),
        optimization({ name: 'vendor' }),
        webpackModule({ mode: 'production' }),
        plugins({ report: process.env.REPORT })
    ]);

export default () => merge(common_config, merge_production(), { mode: 'production' })
