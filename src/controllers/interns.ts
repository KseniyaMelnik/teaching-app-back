import Intern from "../models/Intern";
import Theme from "../models/Theme";

export const addIntern = async (req, res) => {
   try {
       const {firstname, lastname, group} = req.body
       const themes = await Theme.find().sort('-createdAt')
       const newIntern = new Intern ({
           firstname, lastname, group, themes
       })
       await newIntern.save()

       res.json({
           newIntern,
           message: 'Карточка стажера добавлена'
       })
   } catch (error) {
       res.json({
           message: 'Ошибка при создании карточки стажера'
       })
   }
}

export const getAllInterns = async (req, res) => {
    try {
        const interns = await Intern.find().sort('-createdAt')
        if (!interns) {
            return res.json({ message: 'Карточек стажеров нет'})
        }
        res.json({interns})
    } catch (error) {
        res.json({message: 'Что-то пошло не так'})
    }
}

export const getById = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id)
        res.json(intern)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const deleteIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndDelete(req.params.id)
        if (!intern) return res.json({ message: 'Такого стажера не существует' })

        await Intern.findByIdAndUpdate(req.userId, {
            $pull: { interns: req.params.id },
        })

        res.json({ message: 'Стажер был удален.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}