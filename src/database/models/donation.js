// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    amount: {
      type: DataTypes.DOUBLE
    },
    description: {
      type: DataTypes.JSONB,
      validate: {
        // Examples of custom validators:
        isJSON(value) {
          if (typeof (value) !== 'object') {
            throw new Error('Only object allowed');
          }
        }
      }
    }
  });
  Donation.associate = (models) => {
    // associations can be defined here
    // Donation.belongsTo(models.User, {
    //   targetKey: 'id',
    //   foreignKey: 'donationId',
    //   onDelete: 'CASCADE'
    // });
  };
  return Donation;
};