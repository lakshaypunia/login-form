"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.log(message);
    res.status(statusCode).json({ success: false, message: "Internal Server Error" });
};
exports.errorHandler = errorHandler;
