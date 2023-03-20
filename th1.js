let http=require('http');
let sever=http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h5 style="color: gold">hello everybody</h5><hr>');
    res.end();
});
sever.listen(8080,'localhost');
