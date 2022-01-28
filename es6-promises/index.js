const takeAChance = require('./take-a-chance');

const Name = takeAChance('Jeesu');

Name.then(value => {
  console.log(value);
});

Name.catch(value => {
  console.error(value);
});
