const express = require('express');
const router = express.Router();
const Class = require('../models/Class')
const Student = require('../models/Student')

router.get('/Class/:Standard', async (req, res) => {
    try {
        Class.find({ Standard: req.params.Standard })
            .then(data => {
                res.json(data)
            })

    } catch (err) {
        res.send('Error' + err)
    }
})
var dbStudent = []
router.get('/Student/:Division', async (req, res) => {
    try {
        await Class.find({ Division: req.params.Division })
            .then(data => {
                dbStudent = []
                data.map((d, k) => {
                    dbStudent.push(d._id);
                })
                console.log(dbStudent)
            })
        Student.find({ ID: { $in: dbStudent } })
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                console.log(error)
            })
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const findClass = await Class.findOneAndUpdate({
        Standard: req.body.Standard,
        Division: req.body.Division
    },
        {
            Standard: req.body.Standard,
            Division: req.body.Division
        },
        {
            upsert: true,
            new: true
        })
    const test2 = new Student({
        Name: req.body.Name,
        RollNumber: req.body.RollNumber,
        MobileNumber: req.body.MobileNumber,
        ID: findClass._id
    })
    try {
        await test2.save()
        res.send('Saved..')
    } catch (err) {
        res.send('Error' + err)
    }
})

module.exports = router