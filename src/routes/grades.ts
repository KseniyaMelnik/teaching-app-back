import {Router} from "express";
import {checkAuth} from "../utils/checkAuth";
import {addNewGrade, getAllGradesByInternId} from "../controllers/grades";

const grades = Router()

//get all intern's grades
grades.get('/:id', checkAuth, getAllGradesByInternId)
//add new grade
grades.post('/new', checkAuth, addNewGrade)

export default grades