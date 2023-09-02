// Controllers for the award Collection

import 'dotenv/config';
import express from 'express';
import * as awards from './awards-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/awards', (req,res) => { 
    awards.createaward(
        req.body.title, 
        req.body.date, 
        req.body.name,
        req.body.placement
        )
        .then(award => {
            res.status(201).json(award);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Is there a typo? Check your spelling.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/awards', (req, res) => {
    awards.retrieveawards()
        .then(award => { 
            if (award !== null) {
                res.json(award);
            } else {
                res.status(404).json({ Error: 'I can not find the page that you requested. Is the link correct?' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Is there a typo? Check your spelling.' });
        });
});


// RETRIEVE by ID controller
app.get('/awards/:_id', (req, res) => {
    awards.retrieveawardByID(req.params._id)
    .then(award => { 
        if (award !== null) {
            res.json(award);
        } else {
            res.status(404).json({ Error: 'I can not find the page that you requested. Is the link correct?' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Is there a typo? Check your spelling.' });
    });

});


// UPDATE controller ************************************
app.put('/awards/:_id', (req, res) => {
    awards.updateaward(
        req.params._id, 
        req.body.title, 
        req.body.date, 
        req.body.name,
        req.body.placement
    )
    .then(award => {
        res.json(award);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Is there a typo? Check your spelling.' });
    });
});


// DELETE Controller ******************************
app.delete('/awards/:_id', (req, res) => {
    awards.deleteawardById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send({ Success: 'Delete was successful. Congratulation' });
            } else {
                res.status(404).json({ Error: 'I can not complete the task that you requested. Is it already deleted?' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Delete was not successful.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});