const express = require("express");
const restaurantRouter = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurant.controller");

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantById);
restaurantRouter.put("/:id", updateRestaurant);
restaurantRouter.delete("/:id", deleteRestaurant);

module.exports = restaurantRouter;