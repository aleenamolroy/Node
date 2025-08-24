//without path
console.log('Directory name',__dirname)
console.log('File name',__filename)
//with path
const path= require('path')
const configpath = path.join(__dirname,'path1.js') 
console.log("config file path",configpath)

console.log(path.dirname(__filename))

console.log(path.extname('myFile.txt'))
console.log(path.extname('index.html'))
// console.log(path.extname('hello.coffee.md'))
// console.log(path.extname('.index'));

console.log(path.resolve('myFile.txt'))
console.log(path.resolve('/node','doc','myFile.txt'))
console.log(path.parse("C:\\Users\\acer\\Desktop\\Node\\myFile.txt"))