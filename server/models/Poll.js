let mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let pollSchema = new Schema({
    question: String,
    yay: Number,
    nay: Number,
    process: String,
    priority: Boolean
});

mongoose.model('Poll', pollSchema);


// poll

    // question: string
    // yay: num
    // nay: num
    // process: null, active, completed
    // priority: bool



    // methods

    // update yay/nay count
    // find next non processed
    // find next priority

    // complete poll, edit to processed