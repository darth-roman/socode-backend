import { RESPONSE_MESSAGE } from "../config/constants.js";

function errorMiddleware(error, req, res, next) {
    const status = error.status ? error.status : 500
    const message = status === 500 ? RESPONSE_MESSAGE.serverError : error.message
    const errors = error.error
    res.status(status).send({status, message, error: errors})
}

export default errorMiddleware