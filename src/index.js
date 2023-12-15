require("dotenv").config();
const express=require("express");
const app = express();

const employeeRoutes=require("./routes/employee.route")
const sampleRoutes=require("./routes/sample.route")





app.use("/employee",employeeRoutes);

app.use("/sample",sampleRoutes);


app.listen(8082, () => {
    console.log(`App is running on port 8082`);
  });


