const { Subscription, Plan, User } = require('../../database/models');

exports.createSubscription = async (userId, planId) => {
  const user = await User.findByPk(userId);
  const plan = await Plan.findByPk(planId);

  if (!user || !plan) throw new Error('User or Plan not found');

  const startDate = new Date();
  let endDate;
  if (plan.term === 'month') {
    endDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
  } else if (plan.term === 'year') {
    endDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
  }

  return Subscription.create({
    userId,
    planId,
    startDate,
    endDate,
    status: 'active',
  });
};

exports.getUserSubscription = async (userId) => {
  return Subscription.findOne({
    where: { userId, status: 'active' },
    include: [{ model: Plan, attributes: ['name', 'price', 'term'] }],
  });
};

exports.cancelSubscription = async (subscriptionId) => {
  const subscription = await Subscription.findByPk(subscriptionId);
  if (!subscription) throw new Error('Subscription not found');
  
  subscription.status = 'cancelled';
  subscription.endDate = new Date(); // End the subscription immediately
  await subscription.save();

  return { message: 'Subscription cancelled successfully' };
};