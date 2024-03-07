import mongoose from 'mongoose'
import { userInfo } from 'os'

const issueSchema = new mongoose.Schema({
  id: String,
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
})

export default mongoose.model('Issue', issueSchema)
