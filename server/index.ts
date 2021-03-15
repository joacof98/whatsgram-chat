const io = require('socket.io')(4000, {
  cors: {
    origin: '*',
  }
})

interface MessageTo {
  recipients: string[],
  text: string
}

io.on('connection', (socket: any) => {
  const id = socket.handshake.query.id
  // joining the user to the room named 'id'.
  socket.join(id)
  // Send the message to every other recipient, with the form [sender, ...others]
  socket.on('send-message', (msg: MessageTo) => {
    msg.recipients.forEach((recipient: string) => {
      const newRecipients = msg.recipients.filter((r: string) => r !== recipient)
      newRecipients.push(id)

      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text: msg.text
      })
    })
  })
})

console.log('Sv running...')