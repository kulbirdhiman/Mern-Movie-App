import { isValidObjectId } from "mongoose";
const CheckID = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
        res.status(400).send({
            error: true,
            message: "Invalid ID"
        })
    }
    next()
}
export default CheckID;