const http = require('http');
const fs = require('fs');
const qs = require('qs');
let sever = http.createServer((req, res) => {
    if (req.method === "GET") {
        fs.readFile("./templates/index.html", "utf-8", (err, data) => {
            let listUser = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
            let html = '';
            for (let i = 0; i < listUser.length; i++) {
                html +=
                    `
               <tr>
        <td>${listUser[i].id}</td>
        <td>${listUser[i].name}</td>
        <td>${listUser[i].price}</td>
        <td>
        <form method="post">
        <button type="submit">Delete</button>
        <input type="hidden" name="idDlete" value="${listUser[i].id}">
        </form></td>
         <td>
        <form method="post">
        <button type="submit">Edit</button>
        <input type="hidden" name="idEdit" value="${listUser[i].id}">
        </form></td>

      </tr>
              `
            }
            data = data.replace(`{listUser}`, html)

            res.write(data);
            res.end();
        })

    }
    if (req.method === "POST") {

        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let user = qs.parse(data);

            if (user.idDlete) {
                let people = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))
                let index = people.findIndex((item) => {
                    return item.id == user.idDlete;
                })
                people.splice(index, 1);
                fs.writeFileSync("./data/data.json", JSON.stringify(people))
                res.writeHead(301, {location: '/'})
                res.end();

            } else if (user.idEdit) {

                fs.readFile("./templates/editData.html", "utf-8", (err, dataEdithtml) => {
                    let people = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))
                    let index = people.findIndex((item) => {
                        return item.id == user.idEdit;
                    })
                    let userEdit = people[index];
                    dataEdithtml = dataEdithtml.replace("{id}", userEdit.id)
                    dataEdithtml = dataEdithtml.replace(`{name}`, userEdit.name)
                    dataEdithtml = dataEdithtml.replace(`{price}`, userEdit.price)
                    res.write(dataEdithtml)
                    res.end();

                })


            } else if (user.idEditNow) {
                let people = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))
                let index = people.findIndex((item) => {
                    return item.id == user.idEditNow;
                })


                people[index] = {id: user.idEditNow, name: user.nameEdit, price: user.priceEdit};

                fs.writeFileSync("./data/data.json", JSON.stringify(people));
                res.writeHead(301, {location: "/"});
                res.end();

            } else {
                let people = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))

                user.id = ((people.length > 0) ? +people[people.length - 1].id + 1 : 1).toString()
                people.push(user);
                fs.writeFileSync("./data/data.json", JSON.stringify(people))
                res.writeHead(301, {location: '/'})
                res.end();
            }

        })
    }


})
sever.listen(3000, "localhost", function () {
    console.log("sever running")
})
