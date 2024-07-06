const { User } = require('../../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (userData) => {
  const { email, password, username } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword, username });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { user, token };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { user, token };
};