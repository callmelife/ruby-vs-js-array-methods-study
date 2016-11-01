'use strict';

// example function count function
const count = (people) => people.reduce(memo /*, p */ => memo + 1, 0);

// callback for reduce
// each person has a gender attribute
const isFemale = person => person.gender === 'f';

const women = (people) => people.filter(isFemale).reduce(memo /*, person */ =>
  memo + 1, 0);

module.exports = {
  count,
  women,
};
