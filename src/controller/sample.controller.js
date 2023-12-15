

const sampleMessage = async (req, res) => {
    try {
        const response={"Message":"Hello Venkatesh",
    "Status":200};
    res.status(200).send(response);
    } catch (err) {
      console.log("err ", err);
    }
  };


  
  module.exports={
    sampleMessage
  }