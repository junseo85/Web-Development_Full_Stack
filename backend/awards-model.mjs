// Models for the award Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Hmmmm Something failed in the server.' });
    } else  {
        console.log('Congratulation! Connection to the server Success!');
    }
});

// SCHEMA: Define the collection's schema.
const awardschema = mongoose.Schema({
	title:    { type: String, required: true },
	date:     { type: Date, required: true, min: '2005-09-01', default: Date.now },
    name:     { type: String, required: true },
	placement: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "awards".
const awards = mongoose.model('award', awardschema);


// CREATE model *****************************************
const createaward = async (title, date, name, placement) => {
    const award = new awards({ 
        title: title, 
        date: date, 
        name: name,
        placement: placement 
    });
    return award.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveawards = async () => {
    const query = awards.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveawardByID = async (_id) => {
    const query = awards.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteawardById = async (_id) => {
    const result = await awards.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateaward = async (_id, title, date, name, placement) => {
    const result = await awards.replaceOne({_id: _id }, {
        title: title,
        date: date,
        name: name,
        placement: placement
    });
    return { 
        _id: _id, 
        title: title,
        date: date,
        name: name,
        placement: placement 
    }
}

// EXPORT the variables for use in the controller file.
export { createaward, retrieveawards, retrieveawardByID, updateaward, deleteawardById }