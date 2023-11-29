const {getAllEmployee,getEmployeeByEmail}=require("../model/database")


const getEmployees=async()=>{

    const result=getAllEmployee();
    return result;

}


const getEmployeeByMail=async(email)=>{
    const result=getEmployeeByEmail(email);
    return result;
}


module.exports={
    getEmployees,
    getEmployeeByMail
}