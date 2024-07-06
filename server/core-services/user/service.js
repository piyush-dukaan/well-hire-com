const { User } = require('../../database/models');

exports.getUserProfile = async (userId) => {
  return await User.findByPk(userId, {
    attributes: ['id', 'email', 'username', 'profilePicture'],
    include: ['College', 'Subscription'],
  });
};

exports.updateUserProfile = async (userId, updateData) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return await user.update(updateData);
};