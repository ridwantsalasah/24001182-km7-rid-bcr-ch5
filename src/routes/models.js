const express = require("express");
const { authorization } = require("../middlewares/auth");
const { adminRole, userRole } = require("../constants/auth");
const {
  validateGetAllModels,
  validateGetModelById,
  validateAddModel,
  validateUpdateModel,
  validateDeleteModelById
} = require("../middlewares/models");

const {
  getAllModels,
  getModelById,
  addNewModel,
  updateModel,
  deleteModelById
} = require("../controllers/models");

const router = express.Router();

router
  .route("/")
  .get(authorization(adminRole, userRole), validateGetAllModels, getAllModels)
  .post(authorization(adminRole),validateAddModel, addNewModel)

router
  .route("/:id")
  .put(authorization(adminRole),validateUpdateModel, updateModel)
  .get(authorization(adminRole, userRole),validateGetModelById, getModelById)
  .delete(authorization(adminRole),validateDeleteModelById, deleteModelById)

module.exports = router;