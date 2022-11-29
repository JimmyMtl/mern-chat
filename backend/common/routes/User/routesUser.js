const express = require("express");
const userModel = require("../../model/User/modelUser");
const app = express();
const router = express.Router();
router.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
        const res = await user.save();
        console.log(res)
        if(res){
            response.status(201).json(user);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = router;