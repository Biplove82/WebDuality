const  consultModells = require("../Modells/consultationModells");



const consultation = async function (req, res) {
  try {
    const { name, email, organization, phoneNumber, projectDetail } = req.body;
    
    // Ensure that all required fields are present in the request body
    if (!name || !email || !organization || !phoneNumber || !projectDetail) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    
    
    // Create a new instance of the consultation model
    const consultant = new consultModells({
      name,
      email,
      organization,
      phoneNumber,
      projectDetail,
    });

    // Save the consultation data to the database
    await consultant.save();

    // Send a success response
    res.status(200).json({ msg: "Data saved successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};  

module.exports={consultation};