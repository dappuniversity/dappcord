const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}\n`))

const messages = [
  {
    channel: "1",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Dappcord!"
  },
  {
    channel: "2",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Dappcord everyone! My name is John and I've been a blockchain developer for 2+ years."
  },
  {
    channel: "1",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "2",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hey there! My name is Ann and I'm an aspiring blockchain developer!"
  },
  {
    channel: "1",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey everyone!"
  },
  {
    channel: "1",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "1",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "1",
    account: "0x828103B231B39ffFCe028562412B3c04A4640e64",
    text: "Hello!"
  },
  {
    channel: "1",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone have any tips on becoming a blockchain developer?"
  },
]

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('get messages', () => {
    io.emit('get messages', messages)
  })

  socket.on('new message', (msg) => {
    messages.push(msg)
    io.emit('new message', messages)
  })
})