"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid, password } = req.body;
        const user = yield prisma.user.findUnique({ where: { email: uid } });
        if (user) {
            const isPasswordValid = password === user.password ? true : false;
            if (isPasswordValid) {
                res.status(201).json({ success: true, message: "user already exists   logined succesfully" });
            }
            else {
                res.status(201).json({ success: false, message: "login failed username already exists but password entered is incorrect" });
            }
            return;
        }
        const newUser = yield prisma.user.create({
            data: {
                email: uid,
                password
            },
        });
        res.status(201).json({ success: true, message: "New User created successfully", user: newUser });
        return;
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
