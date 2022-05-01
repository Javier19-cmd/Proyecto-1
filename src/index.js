/**
 * Instalaciones realizadas:
 * 
 * 1. Webpack: npm install webpack webpack-cli.
 * 
 * 
*/

import Header from './components/Header.js'
import { sub, sum } from './utils.js'

console.log('Hola des de el index.')

console.log('sum 2 + 2', sum(2,2))

console.log('sub 2 - 2', sub(2,2))

const root = document.getElementById('root')
Header(root, 'Hello world')