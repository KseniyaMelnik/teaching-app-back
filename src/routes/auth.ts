import {Router} from "express";
import {getMe, login, register} from "../controllers/auth";
import {checkAuth} from "../utils/checkAuth";

const auth =  Router()

//Register
auth.post('/register', register)

//Login
auth.post('/login', login)

//Get ME
auth.get('/me', checkAuth, getMe)

export default auth