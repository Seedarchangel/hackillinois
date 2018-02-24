var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema(
    {
        name: { type: String, required: true, max: 100 },
        status: { type: String, required: true, default: 'Unassigned', max: 100 },
        assigned_user: { type: String, max: 100 },
        due_date: { type: Date, default: Date.now},
        description: { type: String, max: 200},
        prerequisite: {type: Schema.ObjectId, ref: 'Task'},
        following: {type: Schema.ObjectId, ref: 'Task'}
    }
);

module.exports = mongoose.model('Task', TaskSchema);