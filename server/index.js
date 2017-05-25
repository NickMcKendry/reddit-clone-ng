const express = require('express')
const webRoutes = require('./web/routes')
const bodyParser = require('body-parser')
const cors =  require('cors')

const app = express()
app.use(cors())
const port = process.env.PORT || 8082

app.use(bodyParser.json())
app.use('/api/posts', webRoutes)






app.listen(port, () => console.log(`listening on ${port}`))
