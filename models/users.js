module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Tasks,
      { foreignKey: 'userId', as: 'tasks' });
  };

  return Users;
};
