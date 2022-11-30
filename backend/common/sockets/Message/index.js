const messageModel = require("../../schema/Message/schemaMessage");
const userModel = require("../../schema/User/schemaUser")
module.exports.sockets = (socket, sockets, io) => {
    socket.on("message", async (msg) => {
        try {
            const user = await userModel.findOne({username: "a"})
            const usera = await userModel.findOne({username: "b"})
            console.log(user, usera)
            const message = new messageModel({
                message: msg?.message,
                // from: '6386a69ab8970b40ee233b2e' || msg?.from?._id,
                // to: '6386a6a3b8970b40ee233b30' || msg?.to?._id
                from: user,
                to: usera

            });
            const res = await message.save();
            console.log(res)
            if (res) {
                socket.emit("message", msg)

            }
        } catch (error) {
            console.error(error)
            socket.emit("message_error", 'error on saving ' + msg?.message)
        }
    })
}