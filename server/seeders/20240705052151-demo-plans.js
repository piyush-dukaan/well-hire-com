// seeders/YYYYMMDDHHMMSS-demo-plans.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plans', [
      {
        id: 'e45aa9ce-985b-4c5c-9024-2189fd07adde',
        name: 'Free Trial',
        description: 'Try WellHire for free for 7 days',
        config: '{}',
        trialPeriod: 7,
        price: 0,
        stripePlanId: null,
        term: null,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e45aa9ce-985b-4c5c-9024-2189fd07add2',
        name: 'Student',
        description: 'Ideal for students looking for internships and entry-level positions',
        config: '{}',
        trialPeriod: 0,
        price: 59,
        stripePlanId: 'price_student_plan',
        term: 'month',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e45aa9ce-985b-4c5c-9024-2189fd07add3',
        name: 'Company',
        description: 'Perfect for companies to post their questions and assessments',
        config: '{}',
        trialPeriod: 0,
        price: 20,
        stripePlanId: 'price_company_plan',
        term: 'pdf',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e45aa9ce-985b-4c5c-9024-2189fd07add4',
        name: 'Club',
        description: 'Full access to all features for a year',
        config: '{}',
        trialPeriod: 0,
        price: 599,
        stripePlanId: 'price_club_plan',
        term: 'year',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Plans', null, {});
  }
};