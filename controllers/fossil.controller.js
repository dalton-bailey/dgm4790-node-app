import { Fossil } from '../models/fossil.js'

export const postAddFossil = ((req, res) => {
    const fossil = new Fossil({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
    })
    console.log(fossil)
    fossil.save() 
    res.json(fossil)
})


export const fossils = async (req, res) => {
    const fossils = await Fossil.find()

    if(!fossils) {
        return res.status(400).json({Message: `No Fossils found`})
    }

    res.json(fossils)
}

export const getFossilById = async (req, res) => {
    const fossilId = req.body.fossilId
    try {
        const fossil = await Fossil.findById(fossilId)
        if (!fossil) {
            return res.status(404).json({ Message: 'Fossil not Found' })
        }
        res.json(fossil)
    } catch(err) {
        return res.status(404).json({ Message: `Invalid ID: ${err}` })
    }
}

export const updateFossil = async (req, res) => {
    const fossilId = req.body.data.fossilId
    const updatedObj = {
        title: req.body.data.title,
        rank: req.body.data.rank,
        year: req.body.data.year,
        image: {
            imageUrl: req.body.data.imageUrl,
            height: req.body.data.height,
            width: req.body.data.width,
        }
    }
    try {
        const fossil = await fossil.findByIdAndUpdate(fossilId, updatedObj, { new: true })
        res.status(200).json(fossil)
    } catch (err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }
}

export const deleteFossil = async (req, res) => {
    const fossilId = req.body.fossilId
    try {
        const deletedFossil= await Fossil.findByIdAndRemove(fossilId)
        if (!deletedFossil) {
            return res.status(400).json({Message: `Fossil to delete not found.`})
        }
        console.log(`Deleted the fossil: ${deletedFossil}`)
        res.sendStatus(200) // a simple success
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }
}