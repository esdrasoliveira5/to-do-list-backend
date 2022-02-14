module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', 
  { title: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.STRING,
    dateLimit: DataTypes.DATEONLY,
    userId: DataTypes.INTEGER,
    created: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: true, createdAt: 'created', updatedAt: false,
  });
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' });
    Tasks.belongsTo(models.Categories,
      { foreignKey: 'categoryId', as: 'categories' });
  };
  return Tasks;
};
