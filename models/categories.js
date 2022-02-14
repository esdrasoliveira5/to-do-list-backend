module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Categories.associate = (models) => {
    Categories.hasMany(models.Tasks,
      { foreignKey: 'id', as: 'tasks' });
  };
  return Categories;
};
