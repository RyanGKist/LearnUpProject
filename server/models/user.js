//////////////////////////////////////////////////////////////////////////
//  SERVER/MODELS/MODEL_NAME_SINGULAR.JS FILE [ SCHEMA / MODEL]
//////////////////////////////////////////////////////////////////////////
// Require Mongoose module (STEP 1) in the following files:
// - mongoose.js file,
// - CONTROLLER file,
// - HERE.
//////////////////////////////////////////////////////////////////////////

// STEP 1 (DB/SCHEMA SETUP):
// Require Mongoose module:
var mongoose = require("mongoose");

// STEP 3 (DB/SCHEMA SETUP):
// Name & Describe Schema:
var UserSchema = new mongoose.Schema(
  {
    //<--- SET MODEL NAME & DESCRIBE MODEL'S SCHEMA
    email: { type: String, required: true },
    hash: { type: String, required: true },
    admin: { type: Number, required: true }
  },
  { timestamps: true }
);

// Set this Schema in our Models as 'Schema_Instance':
var User = mongoose.model("User", UserSchema); //<-- NAME YOUR MODEL INSTANCE
