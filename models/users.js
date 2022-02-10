module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    timestamps: false,
  });

  return Users;
};

