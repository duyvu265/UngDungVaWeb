// const http=require("http");
// const fs=require("fs");
// const qs=require("qs");
// let sever=http.createServer((req, res)=>{
//     fs.readFile("./templates/editData.html","utf-8",(err, data) => {
//         if (err){
//             console.log(err);
//         }else {
//             let listUses=JSON.parse(fs.readFileSync("./data/data.json","utf-8"));
//             let html='';
//             for (let i = 0; i <listUses.length ; i++) {
//                 html+= `<tr>
//                 <td>${listUses[i].id}</tr>
//                 <td>${listUses[i].name}</tr>
//                 <td>${listUses[i].price}</tr>
//                 `
//             }
//             data=data.replace('{data}',html)
//             res.write(data);
//             res.end()
//         }
//
//     })
// })
// sever.listen(3000,'localhost',()=>{
//     console.log("sever running")
// })


const http=require('http');
const fs=require('fs');
const qs=require('qs');
let sever=http.createServer(function (req, res) {
//     fs.readFile("./templates/editData.html","utf-8",(err, data) => {
//         if (err){
//             console.log( err);
//         }else {
//             let listUser=JSON.parse(fs.readFileSync("./data/data.json","utf-8"))
//             let html='';
//             for (let i = 0; i <listUser.length ; i++) {
//                 html+=`<tr>
//              <td>${listUser[i].id}
//              <td>${listUser[i].name}
//              <td>${listUser[i].price}
//              </tr>
//               `
//             }
//             data=data.replace('{data}',html);
//
//             res.write(data);
//             res.end();
//         }
//     })
// })










})
sever.listen(8000,"localhost",function () {
    console.log("sever running in 8000")
})