module.exports.sockets = (socket, sockets, io) => {
    socket.on("message", (msg) => {
        console.log(msg)
        socket.emit("message", `received message: ${msg}`)
    })
}