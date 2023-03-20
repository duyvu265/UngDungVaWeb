let http=require('http');
let sever=http.createServer((req, res)=>{
    res.write('<h1>hello everybody</h1><hr>');
    res.end();
});
sever.listen(8080,'localhost');
