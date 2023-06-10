const router = require('express').Router();
const studentDATA = require('../model/student')

//! CRUD 
//*CREATION
router.post('/', async (req, res) => {

    try {
        console.log(req.body)
        let item = req.body
        const saveddata = await studentDATA(item); //crosschecking the criteria before saving
        saveddata.save();

        res.send('success')

    } catch (error) {
        console.log(error)
        res.send('error')
    }


})





//*READING 

router.get('/', async (req, res) => {
    try {

        let data = await studentDATA.find({})
        res.send(data)

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})
//*UPDATING


router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log('id check', id)
        let updateData = {$set: req.body}

        const updated = await studentDATA.findByIdAndUpdate(id, updateData)

        res.json(updated)

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})

//*DELETING


router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log('id check', id)

        const updated = await studentDATA.findByIdAndDelete(id)

        res.send("deleted successfully")

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})



module.exports = router