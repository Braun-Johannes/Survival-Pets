import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  birthday: { type: String, required: true },
  createdAt: { type: Number, required: true },
  deathDate: { type: String, required: true },
  energy: { type: Number, required: true },
  happiness: { type: Number, required: true },
  health: { type: Number, required: true },
  lastUpdated: { type: Number, required: true },
  name: { type: String, required: true },
  satiety: { type: Number, required: true },
  type: { type: String, required: true },
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
