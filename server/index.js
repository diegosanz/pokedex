const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/../dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'))
})

const port = process.env.PORT || 3001
app.listen(port)

console.log('App is listening on port ' + port)
