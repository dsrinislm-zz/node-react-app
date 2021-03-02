const express = require('express');
const router = express.Router();

const stocks = [
  { name: 'Infosys', price: 2.3 },
  { name: 'HCL', price: 7.31 },
  { name: 'TCS', price: 0.5 },
  { name: 'Harman', price: 25 },
];

const search = (array, filters) => {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(
        (filter) => filter === item[key]
      );
    });
  });
};
/* GET stocks listing. */
router.get('/:companies', function (req, res, next) {
  const companies = req.params.companies.split(',');
  const filters = {
    name: companies,
  };
  const result = search(stocks, filters);
  res.json(search(stocks, filters));
});
router.get('/', function (req, res, next) {
  res.json(stocks);
});

module.exports = router;
