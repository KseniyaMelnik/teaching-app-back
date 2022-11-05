import Grade from "../models/Grade";

export const getAllGradesByInternId =  async (req, res) => {
    try {
        const grades = await Grade.find({ intern_id: req.params.id})
        if (!grades) return res.json({ message: 'У стажера еще нет оценок' })

        res.json({ grades,
            message: 'Оценки стажера получены' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const addNewGrade = async (req, res) => {
    try {
        const {intern_id, theme_id, score} = req.body
       // const grades = await Grade.find().sort('-createdAt')
        const newGrade = new Grade ({
            intern_id, theme_id, score
        })
        await newGrade.save()
        res.json({
            newGrade,
            message: 'Оценка добавлена'
        })
    } catch (error) {
        res.json({ message: 'Ошибка при создании оценки' })
    }
}