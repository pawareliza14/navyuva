const express = require("express");
const router = express.Router();
const researchInstituteController = require("../controller/instituteProfile.js");

// CRUD Routes
router.post("/", researchInstituteController.createInstitute);
router.get("/", researchInstituteController.getAllInstitutes);
router.get("/:id", researchInstituteController.getInstituteById);
router.put("/:id", researchInstituteController.updateInstitute);
router.delete("/:id", researchInstituteController.deleteInstitute);

module.exports = router;
