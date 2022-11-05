import Theme from "../models/Theme";

export const addTheme = async (req, res) => {
    try {
        const {title} = req.body
        const newTheme = new Theme ({
            title
        })
        await newTheme.save()

        res.json({
            newTheme,
            message: 'Новая тема добавлена'
        })
    } catch (error) {
        res.json({
            message: 'Ошибка при создании новой темы'
        })
    }
}

export const getAllThemes = async (req, res) => {
    try {
        const themes = await Theme.find().sort('-createdAt')
        if (!themes) {
            return res.json({ message: 'Тем еще нет'})
        }
        res.json({themes})
    } catch (error) {
        res.json({message: 'Что-то пошло не так'})
    }
}

export const deleteTheme =  async (req, res) => {
    try {
        const theme = await Theme.findByIdAndDelete(req.params.id)
        if (!theme) return res.json({ message: 'Такой темы не существует' })

        await Theme.findByIdAndUpdate(req.themeId, {
            $pull: { themes: req.params.id },
        })

        res.json({ message: 'Тема была удалена.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}