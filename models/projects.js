import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter a project title'],
        },
        subtitle: {
            type: String,
            required: [true, 'Please enter a one-line summary'],
        },
        paragraphs: {
            type: [String],
            validate: {
                validator: function(v) {
                    return v && v.length >= 1;
                },
                message: 'Please add at least one paragraph'
            }
        },
        image: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }

)

const Project = mongoose.model('Project', projectSchema)

export default Project