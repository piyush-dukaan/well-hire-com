const companyService = require('./service');

exports.listCompanies = async (req, res) => {
  try {
    const companies = await companyService.listCompanies();
    res.json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCompanyWithColleges = async (req, res) => {
  try {
    const company = await companyService.getCompanyWithColleges(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};