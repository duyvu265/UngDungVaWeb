const http=require('http');
const fs=require('fs');
const qs=require('qs');
let sever=http.createServer((req, res)=> {
    let methodRequest=req.method;
    if (methodRequest==="GET"){
        fs.readFile("./templates/indext.html","utf-8",(err, data) => {
            res.setHeader('content-Type','text/html')
            res.write(data);
            return res.end();


        })
    }else {
        let data='';
        req.on('data',chunk => {
            data+=chunk;
        })
        req.on('end',()=>{
            let name=qs.parse(data).name;
            fs.writeFile("./data/data.json",name,err => {
                if (err){
                    console.log(err);
                    return
                }
                return res.end('Creat success');
            })
        })
        req.on("error",()=>{
            console.log("error")
        })
    }





})

sever.listen(8080,function () {
    console.log("sever running port 8080");
})