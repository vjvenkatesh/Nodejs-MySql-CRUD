require("dotenv").config();
const express=require("express");
const app = express();

const employeeRoutes=require("./routes/employee.route")





app.use("/employee",employeeRoutes);


app.listen(8082, () => {
    console.log(`App is running on port 8082`);
  });


