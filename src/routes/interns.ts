import {Router} from "express";
import {addIntern, deleteIntern, getAllInterns, getById} from "../controllers/interns";
import {checkAuth} from "../utils/checkAuth";

const interns = Router()

// get interns
interns.get('/', checkAuth, getAllInterns)
// add intern
interns.post('/new', checkAuth, addIntern)
// get intern By id
interns.get('/:id', checkAuth, getById)
// delete intern
interns.delete('/:id', checkAuth, deleteIntern)

export default interns