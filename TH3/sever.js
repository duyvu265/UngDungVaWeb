let http=require('http');
let fs=require('fs');
let qs=require('qs');
let sever=http.createServer(function (req, res) {
    if (req.method==="GET"){
        fs.readFile('register.html',function (err, data) {
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data);
            userInfo.email = undefined;
            fs.readFile('info.html', "utf8", function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                datahtml = datahtml.replace('{email}', userInfo.email);
                datahtml = datahtml.replace('{password}', userInfo.password);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            })
        })
        req.on('error', () => {
            console.log('error');

        })
    }
})


sever.listen(8080,function () {
    console.log('sever running at localhost 8080')
})