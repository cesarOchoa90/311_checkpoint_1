const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 4000
const users = require("./routes/users")

//CODE GOES HERE

app.use(bodyParser.json())
app.use(users)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})
