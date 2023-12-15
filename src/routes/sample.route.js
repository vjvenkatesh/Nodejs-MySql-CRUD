const express=require("express");
const router = express.Router();

const {sampleMessage}=require("../controller/sample.controller");



router.get("/get",sampleMessage);




module.exports=router;