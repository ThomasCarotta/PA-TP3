const path = require('path');  //importamos la libreria path
const HtmlWebpackPlugin = require('html-webpack-plugin'); //importamos la libreria HtmlWebpackPlugin
const CopyWebpackPluguin = require('copy-webpack-plugin'); //importamos la libreria CopyWebpackPluguin

module.exports = {
entry: './index.js', //archivo de entrada
output: {
path: path.resolve(__dirname, 'dist'), //carpeta donde se guarda el proyecto
filename: 'main.js' //nombre del archivo de salida
},
resolve: {
extensions: ['.js'], //extenciones que vamos a utilizar
},
module: {
rules: [
{
test: /\.js?$/, //exprecion regular para identificar los archivos js
exclude: /node_modules/, //excluir la carpeta node_modules
use: {
loader: 'babel-loader', //utilizar el loader babel
}
}
]
},
plugins: [
new HtmlWebpackPlugin(
{
inject: true,
template: './public/index.html', //archivo html de entrada
filename: './index.html', //archivo html de salida
}
),
new CopyWebpackPluguin({
patterns: [{ from: './src/styles/styles.css', //archivo css de entrada
to: 'styles.css' }],  //agregue a esta linea el 'styles.css'
})
]
}