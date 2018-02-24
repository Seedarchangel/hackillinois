var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: { type: String, required: true, max: 100 },
        password: { type: String, required: true, max: 100 },
        email: { type: String, required: true, max: 100 },
        project: {type: Schema.ObjectId, ref: 'Project'},
        current_task: {type: Schema.ObjectId, ref: 'Task'},
        avatar: {type: String},
        github: { type: String, max: 100 }
    }
);

module.exports = mongoose.model('User', UserSchema);
