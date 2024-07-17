const express = require('express');
const Todo = require('./models/todo');
const todoRoutes=require("./routes/todoRoutes");
const main = require('./config/dbConfig');
const app = express()
const port = 3000

main().catch(err => console.log(err));

app.use(express.json());

app.use("/todos",todoRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})