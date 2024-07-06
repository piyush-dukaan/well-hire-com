module.exports = (sequelize, DataTypes) => {
    const College = sequelize.define('College', {
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
  
    College.associate = (models) => {
      College.hasMany(models.Question);
    };
  
    return College;
  };