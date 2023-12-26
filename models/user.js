const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogapp')
.then(() => {
    console.log('Connected to Database...');
})
.catch((err) => {
    console.log(err);
});


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    blogs: [{type: mongoose.Types.ObjectId, ref:"Blog", required: true}],
});

module.exports = mongoose.model('User', userSchema);

