const serviceModells = require("../Modells/servicesModells");

const service = async function (req, res) {
  try {
    const { name, email, phoneNumber,domain } = req.body;
    const services = new serviceModells ({
        name, email, phoneNumber,domain

    })
    await services.save()
    res.status(200).json({msg:"service apply"})
       
 } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
module.exports={service}