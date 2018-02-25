var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
    {
        name: { type: String, required: true, max: 100},
        description: { type: String, max: 200},
        repo: { type: String, max: 200},
        total_task: {type: Number, default: 0},
        task_finished: { type: Number, default: 0 },
        task_in_progress: { type: Number, default: 0 },
        task_unassigned: { type: Number, default: 0 },
        task: [{ type: Schema.ObjectId, ref: 'Task'}]
    }
);

module.exports = mongoose.model('Project', ProjectSchema);