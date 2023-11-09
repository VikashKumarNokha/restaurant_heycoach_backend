const { Restaurant, User } = require("../relations/userRestaurantRelation");
const errorHandler = require("../utils/Error");

// create Restaurant
const createRestaurant = async (req, res, next) => {
  const { name, address, image_url, email, mobile, added_by } = req.body;

  try {
    if (!name) return next(errorHandler(400, "Please enter a name"));
    if (!address) return next(errorHandler(400, "Please enter a address"));
    if (!image_url) return next(errorHandler(400, "Please enter a image_url"));
    if (!email) return next(errorHandler(400, "Please enter a email id"));
    if (!mobile) return next(errorHandler(400, "Please enter a mobile"));
    if (!added_by) return next(errorHandler(400, "Please enter a added_by user id"));

    const restaurant = await Restaurant.create({
      name,  address, image_url, email, mobile, added_by 
    });

    res.status(201).json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Get All Restaurant
const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({
      include : [
        {
             model : User,
             attributes : ["fullName", "email", "mobile", "id"]
        }
     ]
    });

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Get a Restaurant By Id
const getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByPk(id, {
      include : [
        {
             model : User,
             attributes : ["fullName", "email", "mobile", "id"]
        }
     ]
    });

    if (!restaurant) {
      return next(errorHandler(404, "Restaurant not found."));
    }

    res.json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Update a Restaurant By Id
const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, image_url, email, mobile, added_by } = req.body;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return next(errorHandler(404, "Restaurant not found."));
    }

    if (name) restaurant.name = name;
    if (address) restaurant.address = address;
    if (image_url) restaurant.image_url = image_url;
    if (email) restaurant.email = email;
    if (mobile) restaurant.mobile = mobile;
    if (added_by) restaurant.added_by = added_by;

    await restaurant.save();

    res.json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Delete a Restaurant By Id
const deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return next(errorHandler(404, "Restaurant not found."));
    }

    await restaurant.destroy();

    res.json({ message: "Restaurant deleted successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
};