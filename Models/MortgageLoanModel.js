import mongoose from "mongoose";

const MortgageLoanSchema = new mongoose.Schema({
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
  latestSalarySlip: {
    type: String,
  },
  threeMonthsBankStatement: {
    type: String,
  },
  panCard: {
    type: String,
  },
  idProof: {
    type: String,
  },
  addressProof: {
    type: String,
  },
  documentOfThePropertyTobeMortgage: {
    type: String,
  },
  itReturns: {
    type: String,
  },
});

const MortgageLoanModel = mongoose.model("MortgageLoan", MortgageLoanSchema);

export default MortgageLoanModel;
