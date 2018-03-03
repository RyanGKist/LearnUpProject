// / /////////////////////////////////////////////////////////////////////////////////////
//  SERVER/CONTROLLERS/CONTROLLER_NAME_PLURAL.JS FILE (CONTROLLER for a MODEL ):
// / //////////////////////////////////////////////////////////////////////////////////////
// Require Mongoose module in the following files:
// - mongoose.js file,
// - HERE,
// - SCHEMA/MODEL file.
// / //////////////////////////////////////////////////////////////////////////////////////

// STEP 1 (DB/SCHEMA SETUP):
// Require Mongoose module:
const mongoose = require('mongoose')

// STEP 4 (DB/SCHEMA SETUP): Declare/define controller on model & export to routes.js:
// / ///////////////////////////////////////////////////////////////////////////////////////
//  Retrieve a defined schema from mongoose models:
// 'TableName' variable object comforms to a model_instance retrieved from mongoose models.
const TableName = mongoose.model('model_instance')

module.exports = {
  // EXAMPLE OF A CRUD get REQUEST method:
  get: function (request, response) {
    TableName.findOne({}, (err, result) => {
      if (err) {
        response.json({ message: 'error!', error: err }) // <-- CHANGED THIS FOR BOILER (FROM LECTURE NOTES)
      } else if (!result) {
        const instance = new TableName({ gold: 0 }) // <-- CREATE NEW DOCUMENT (RECORD aka INSTANCE) IN DB

        instance.save() // < -- SAVE IT!
        response.json(instance)
      } else {
        response.json({ message: 'Success', data: result }) // CHANGED THIS FOR BOILER (FROM LECTURE NOTES)
      }
    })
  } // <--- ADD ADDITIONAL METHODS SEPARATED BY A COMMA ','
}
