const express=require("express");
const router = express.Router();

const {getAllEmployees,getEmployeeEmailByPayload}=require("../controller/employee.controller");
const { verifyAuth } = require("../validations/verifyAuth");



router.use(verifyAuth);

router.get("/all",getAllEmployees);

router.get("/:email",getEmployeeEmailByPayload);



module.exports=router;