var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
    {
        name: { type: String, required: true, max: 100},
        description: { type: String, max: 200},
        repo: { type: String, max: 200},
        total_task: {type: Number},
        task_finished: { type: Number },
        task_in_process: { type: Number },
        task_unassigned: { type: Number },
        task: [{ type: Schema.ObjectId, ref: 'Task'}]
    }
);