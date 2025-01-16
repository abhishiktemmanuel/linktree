// models/Profile.ts
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  description: String,
  avatar: String,
  links: [{
    title: String,
    url: String,
    icon: String
  }]
});

export default mongoose.model('Profile', profileSchema);
