import mongoose from "mongoose";

const NewCorrectionPanApplication = new mongoose.Schema({
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
  ProofOfIdentity: {
    type: String,
  },
  ProofOfResidency: {
    type: String,
  },
  DateofBirthProof: {
    type: String,
  },
});

const NewCorrectionPanApplicationModel = mongoose.model(
  "NewCorrectionPanApplication",
  NewCorrectionPanApplication
);

export default NewCorrectionPanApplicationModel;
