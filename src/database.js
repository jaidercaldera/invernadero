const moongose = require("mongoose");
(async () =>{
    try {
        const db = await moongose.connect("mongodb+srv://jaider:QI12zclh9peT5YOd@cluster0.yc3hnat.mongodb.net/electron?retryWrites=true&w=majority")
        console.log('DB connect to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()