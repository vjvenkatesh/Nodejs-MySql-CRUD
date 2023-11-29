const pool=require("../database/dbConnection");


const getAllEmployee=async()=>{
    const [result]=await pool.query("SELECT * FROM employee");
    if(result){
        return result;
    }
    else{
        return false;
    }
    
}


const getEmployeeByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM employee WHERE email = ?';
        const [result] = await pool.query(query, [email]);
        
        if (result.length >0) {
            return result;
        } else {
            return { error: 'No Data Found' };
        }
    } catch (error) {
        return { error: 'Database Error' };
    }
};


module.exports={getAllEmployee,getEmployeeByEmail};