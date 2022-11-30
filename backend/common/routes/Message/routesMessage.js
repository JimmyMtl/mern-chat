const express = require("express");
const messageModel = require("../../model/Message/modelMessage");
const app = express();
const router = express.Router();
router.post("/message", async (request, response) => {
    const message = new messageModel(request.body);

    try {
        const res = await message.save();
        console.log(res)
        if(res){
            response.status(201).json(message);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = router;