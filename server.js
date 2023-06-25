//create server
const http=require('http');
http.createServer((req,res)=>{
res.write("<h1> hello i am satya</h1>")
res.end();
console.log('server Start')
}).listen(5000);