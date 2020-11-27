const router = require('express').Router();
const Birthday = require('../db/models/birthday.model');

router.get('/', async (req, res) => {
    try {
       const birthday = await Birthday.find();
       res.json(birthday); 
    } catch(err){
        console.log(err.toString());
    }
});



router.post('/', async (req, res) => {
    try {
        const birthday = new Birthday(req.body);
        const response = await birthday.save();
        res.json(response);
    } catch(err) {
        console.log(err.toString()); 
    }
});

router.get('/:id', async (req, res) => {
    try {
        const birthday = await Birthday.findById(req.params.id)
        res.json(birthday);
    } catch (error) {
        console.log(err.toString());
    }
});

router.put('/:id', async (req, res) => {
    try {
        const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        await birthday.save();
        res.json(birthday);
    } catch (err) {
        console.log(err.toString());
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Birthday.findByIdAndDelete(req.params.id);
        res.json('birthday deleted')
    } catch (err) {
        console.log(err.toString());
    }
});

module.exports = router;






