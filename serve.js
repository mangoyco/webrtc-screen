const express = require('express')
const bodyParser = require('body-parser')
const https = require('https');
const http = require('http');
const fs = require('fs')
const httpsOpt = {
  key: fs.readFileSync('./keys/privatekey.pem','utf8'),
  cert: fs.readFileSync('./keys/certificate.pem', 'utf8')
}
const roomCenter = { mainRoom: { ower: { offer:null,candidate:[] }, cust:[] } }

const app = express()
app.use(express.static('static'))
// app.use(express.json())
// app.use(express.urlencoded())
app.use(bodyParser.json({
  limit: '1mb'
})); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.get('/', (req, res) => {
  res.send(JSON.stringify(roomCenter))
})

app.post('/saveMainOffer', (req, res) => {
  roomCenter.mainRoom.ower.offer = req.body
  // console.log(roomCenter.mainRoom.ower.offer)
  res.send({success:true})
})

app.post('/saveMainCandidate', (req, res) => {
  // console.log(JSON.stringify(req.body))
  roomCenter.mainRoom.ower.candidate.push({ ...req.body })
  res.send(roomCenter)
})

app.post('/addCustAnswer', (req, res) => {
  // console.log(JSON.stringify(req.body))
  roomCenter.mainRoom.cust.push({
    ...req.body
  })
  res.send(roomCenter.mainRoom.cust)
})

const httpsServer = https.createServer(httpsOpt, app);
const httpServer = http.createServer(app);

httpsServer.listen(3000);
httpServer.listen(3001);