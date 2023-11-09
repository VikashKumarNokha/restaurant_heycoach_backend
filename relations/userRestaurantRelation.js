
const {User, Restaurant} = require("../models")

//  user Restaurant relations -----> one to many relation
User.hasMany(Restaurant,{ foreignKey: "added_by" });
Restaurant.belongsTo(User, { foreignKey: "added_by" });

module.exports = {User, Restaurant};

