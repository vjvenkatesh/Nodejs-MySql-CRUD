require('newrelic');
require("dotenv").config();
const express=require("express");
const app = express();

const employeeRoutes=require("./routes/employee.route")
const sampleRoutes=require("./routes/sample.route")





app.use("/employee",employeeRoutes);

app.use("/sample",sampleRoutes);


app.listen(3000, () => {
    console.log(`App is running on port 3000`);
  });


