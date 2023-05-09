import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintBarePlugin from 'stylelint-bare-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const entry = ({ app_files, hot } = {}) => ({
    entry: { app: hot ? [...app_files, 'react-hot-loader/patch'] : app_files }
});

export const optimization = ({ name } = {}) => ({
    optimization: {
        runtimeChunk: { name },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name,
                    chunks: 'all',
                    minSize: 1
                }
            }
        }
    },
    performance: { hints: false }
});

export const webpackModule = ({ mode } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
            },
            { test: /\.html$/, use: [{ loader: 'html-loader' }] },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        // Configuramos un publicPath distinto porque url() se resuelve en css
                        // a partir del directorio donde se encuentran los ficheros de estilo,
                        // no a partir del directorio publico del sitio web
                        options: mode === 'production' ? { publicPath: '../../' } : {}
                    },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: mode !== 'production' }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // Configuramos un publicPath distinto porque url() se resuelve en css
                        // a partir del directorio donde se encuentran los ficheros de estilo,
                        // no a partir del directorio publico del sitio web
                        options: { publicPath: '../../' }
                    },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: [/img/],
                use: [{ loader: 'file-loader', options: { name: './assets/fonts/[path][name].[ext]' } }]
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                include: [path.resolve(__dirname, 'src')],
                use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }]
            },
            {
                test: /\.(jpg|png|gif)$/,
                exclude: [path.resolve(__dirname, 'src')],
                use: [{ loader: 'file-loader', options: { name: './assets/img/[name].[ext]' } }]
            },
            {
                test: /\.(bin|png|gif)$/
            }
        ]
    }
});

export const plugins = ({ report } = {}) => ({
    plugins:
        [
            report ? new BundleAnalyzerPlugin({ analyzerMode: 'static' }) : () => undefined,
            new MiniCssExtractPlugin({ filename: './assets/css/[name].css' }),
            new StyleLintBarePlugin({ files: '**/*.css' }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ]
});

