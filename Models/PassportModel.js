import mongoose from "mongoose";

const PassportSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "services",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
  LoanAmount: {
    type: Number,
  },
  BirthProof: {
    type: String,
  },
  AddressProof: {
    type: String,
  },
});

const PassportModel = mongoose.model("Passport", PassportSchema);

export default PassportModel;
