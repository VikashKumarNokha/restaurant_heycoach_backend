const { User } = require("../relations/userRestaurantRelation");
const errorHandler = require("../utils/Error");

// create User
const createUser = async (req, res, next) => {
    const { fullName, email, mobile } = req.body;
  
    try {
      if (!fullName) return next(errorHandler(400, "Please enter your full Name"));
      if (!email) return next(errorHandler(400, "Please enter your email id"));
      if (!mobile) return next(errorHandler(400, "Please enter your monile number"));
      
      const user = await User.create({
        fullName,
        email,
        mobile,
      });
  
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  // Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};


module.exports = {
    createUser,
    getAllUsers
  };
