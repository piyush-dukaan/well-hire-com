module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      visitDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pdfUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      metaData: {
        type: DataTypes.JSON,
        defaultValue: {},
      },
    });
  
    Question.associate = (models) => {
      Question.belongsTo(models.Company);
      Question.belongsTo(models.College);
      Question.belongsTo(models.User, { as: 'uploader' });
    };
  
    return Question;
  };