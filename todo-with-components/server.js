require('dotenv').config()

const http = require('http')

const app = require('./backend/app')

app.set('port', 3000);
const serv = http.createServer(app)
serv.listen(3000, () => {
    console.log('App is running : http://localhost:3000')
})