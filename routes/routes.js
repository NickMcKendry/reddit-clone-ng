const express = require('express')
const router = express.Router()
const bodyParse = require('body-parser')

const port = process.env.PORT || 6500

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

router.get('/*', (req, res, next) => {
  const options = {
    root: __dirname + '/../redditApp'
  }

  res.sendFile('index.html', options, (err) => {
    if(err) return next(err)

    console.log('Index file sent to browser');
  })
})

module.exports = router
