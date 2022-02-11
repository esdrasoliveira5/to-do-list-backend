module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.STRING,
    dateLimit: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    created: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false,
  });
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' });
  };

  return Tasks;
};
