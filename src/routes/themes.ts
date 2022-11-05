import {Router} from "express";
import {checkAuth} from "../utils/checkAuth";
import {addTheme, getAllThemes, deleteTheme} from "../controllers/themes";

const themes = Router()
// get all themes
themes.get('/', checkAuth, getAllThemes)
// add intern
themes.post('/new', checkAuth, addTheme)
// delete theme
themes.delete('/:id', checkAuth, deleteTheme)

export default themes