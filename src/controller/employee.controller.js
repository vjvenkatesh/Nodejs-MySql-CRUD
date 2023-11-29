
const {getEmployees,getEmployeeByMail}=require("../services/employee.service")

const getAllEmployees = async (req, res) => {
    try {
      const userRecords = await getEmployees();
      if (userRecords.length < 1) {
        res.status(403).json({ message: "No Users found" });
      } else {
        res.status(200).json(userRecords);
      }
    } catch (err) {
      console.log("err ", err);
    }
  };



  const getEmployeeEmailByPayload=async(req,res)=>{
    const email=req.params.email;
    try {
      const userRecords = await getEmployeeByMail(email);
      if (userRecords.length <0) {
        res.status(403).json({ message: "No Users found" });
      } else {
        res.status(200).json(userRecords);
      }
    } catch (err) {
      console.log("err ", err);
    }
  }



  module.exports={
    getAllEmployees,
    getEmployeeEmailByPayload
  }