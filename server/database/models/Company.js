module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  
    Company.associate = (models) => {
      Company.hasMany(models.Question);
    };
  
    return Company;
  };