const fs=require('fs');
const app=require('./app');
console.log('ss', app.y());
fs.writeFileSync("hello","Satya")
console.log('_dirname', __dirname)
console.log('__filename', __filename)
