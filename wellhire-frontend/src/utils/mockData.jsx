export const companies = [
    { id: 1, name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { id: 2, name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { id: 3, name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    // ... (add 17 more companies)
  ];
  
  export const colleges = [
    { id: 1, name: 'MIT' },
    { id: 2, name: 'Stanford' },
    { id: 3, name: 'Harvard' },
    { id: 4, name: 'CalTech' },
    { id: 5, name: 'Berkeley' },
  ];
  
  export const questions = companies.flatMap(company => 
    colleges.map(college => ({
      id: `${company.id}-${college.id}`,
      companyId: company.id,
      collegeId: college.id,
      companyName: company.name,
      collegeName: college.name,
      visitDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      pdfUrl: '/mock-question-set.pdf',
    }))
  );
  
  export const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: 0,
      features: ['Access to 5 question sets per month', 'Basic search functionality'],
      buttonText: 'Start for free',
    },
    {
      id: 2,
      name: 'Pro',
      price: 9.99,
      features: ['Unlimited access to all question sets', 'Advanced search', 'PDF downloads'],
      buttonText: 'Go Pro',
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 49.99,
      features: ['All Pro features', 'API access', 'Dedicated support'],
      buttonText: 'Contact sales',
    },
  ];