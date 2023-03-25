const http=require('http');
const fs=require('fs');
let sever=http.createServer((req, res) => {
    fs.readFile("todo.html","utf-8",(err, data) => {
        if (err){
            console.log(err)
        }else {
            res.write(data);
            res.end();
        }
    })

})
sever.listen(3000,"localhost",()=>{
    console.log("sever")
})